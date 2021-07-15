import Puppeteer from 'puppeteer-core'
import { StartList } from '../models/models'

function findMetaDataForEvent(trackEvent: Element): { eventName: string, athleteGroup: string, date: Date} {
    const eventName = trackEvent.children[2].innerHTML.trim()
    const athleteGroup = trackEvent.children[1].innerHTML.trim()
    const dateString = trackEvent.children[3].innerHTML.trim()
    const date = new Date(
        Number.parseInt(dateString.substring(6, 10)), // year
        Number.parseInt(dateString.substring(3, 5)),  // month
        Number.parseInt(dateString.substring(0, 2))   // day
    )

    return { eventName, athleteGroup, date }
}

export const getStartlists = async (linkId: string | null): Promise<StartList[]> => {
    var startlists: StartList[] = [];

    if (linkId === null) {
        return startlists
    }

    const browser = await Puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`https://wp.nif.no/PageTerminDetail.aspx?LinkId=${linkId}`)
    await page.evaluate(() => {
        const trackEvents = document.getElementsByClassName('tablesorter-hasChildRow')
        const trackEventsArray = Array.from(trackEvents)
        
        trackEventsArray.forEach(trackEvent => {
            const { eventName, athleteGroup, date } = findMetaDataForEvent(trackEvent)
            const startList: StartList = { event: eventName, group: athleteGroup, date: date, athletes: [] } 
            const athleteList = trackEvent.nextElementSibling?.children[0].children[0].children
            if (athleteList) {
                for (let index = 1; index < athleteList.length; index++) {
                    const athleteRow = athleteList.item(index)
                    const name = athleteRow?.children[0]
                    const club = athleteRow?.children[1]
                    startList.athletes.push({ 
                        name: name?.innerHTML.toString() ?? '',
                        club: club?.innerHTML.toString() ?? ''
                    })
                }
            }
            startlists.push(startList)
        });
    })
    await browser.close()

    return startlists
}