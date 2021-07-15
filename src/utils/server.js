import { Puppeteer } from 'puppeteer-core'
import { express } from 'express'
import { getStartlists } from './scraper'

const app = express()

app.get('/startlists', getStartlists)

app.listen(4000)