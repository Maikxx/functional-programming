// Immediately load the dotenv file if the environment is not production.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

const fs = require('fs')

// Server
const express = require('express')
const app = express()
const port = 3000

// Getters and Filters
const helpers = require('./api/getters.ts')
const queries = require('./api/queries.ts')

;(async () => {
    try {
        const dutchBooks = await queries.queryBooksByLanguage('dut')
        const englishBooks = await queries.queryBooksByLanguage('eng')
        const transformedD3Data = helpers.getD3Data(dutchBooks, englishBooks)

        if (transformedD3Data) {
            app.get('/', (req: Express.Request, res: any) => res.json(transformedD3Data))
            app.listen(port, () => console.log(`\nAvailable on: localhost:${port}`))

            fs.writeFile('data.json', JSON.stringify(transformedD3Data), (err) => err && console.error(err))
        }
    } catch (error) {
        console.error(error)
        fs.writeFile('search.error.json', error)
    }
})()
