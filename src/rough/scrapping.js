import axios from 'axios'
import puppeteer from 'puppeteer'

const START_URL = 'https://www.naukri.com/frontend-software-developer-jobs?k=frontend%20software%20developer&experience=3&nignbevent_src=jobsearchDeskGNB'

const jobs = []
async function scrapeJobs(url) {

    const browser = await puppeteer.launch({headless:true})
    const page = await browser.newPage()

    try {
        const response = await axios.get(url)
        console.log('Request Success')
        console.log(response.data)        
    } catch (error) {
        console.error('Error occured: ')
        console.error(error)
    }
    const response = await axios.get(url)
    console.log(response.data)

}
scrapeJobs(START_URL)