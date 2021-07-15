import React from 'react'
import { getParam } from '../../utils/paramsHelper'

const data = [
    {
        "event": "10 000m",
        "group": "MS",
        "athletes": [
            {
                "name": "Ola Matre",
                "club": "Oslostudentenes Idrettslag"
            },
            {
                "name": "Fredrik Fyksen Lund",
                "club": "Oslostudentenes Idrettslag"
            }
        ]
    },
    {
        "event": "10 000m",
        "group": "KS",
        "athletes": []
    }
]

export const Home = (): JSX.Element => {
    const linkId = getParam('linkid')

    return (
        <div>
            <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th>Klasse</th>
                        <th>Øvelse</th>
                    </tr>
                </thead>
                {data?.map((element) => {
                    return (
                        <tbody key={JSON.stringify(element)}>
                            <tr>
                                <th>{element.group}</th>
                                <th>{element.event}</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>
                                    <table style={{width: '100%'}}>
                                        <thead>
                                            <tr>
                                                <th>Navn</th>
                                                <th>Klubb</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {element.athletes?.map((athlete) => {
                                                return (
                                                    <tr key={JSON.stringify(athlete)}>
                                                        <th>{athlete.name}</th>
                                                        <th>{athlete.club}</th>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td>Antall deltagere:</td>
                                                <td>{element.athletes.length}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </th>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}