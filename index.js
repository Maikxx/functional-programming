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
const getters = require('./api/getters.js')
const queries = require('./api/queries.js')

;(async () => {
    try {
        const dutchBooks = await queries.queryBooksByLanguage('dut')
        const englishBooks = await queries.queryBooksByLanguage('eng')
        const transformedD3Data = getters.getD3Data(dutchBooks, englishBooks)

        if (transformedD3Data) {
            app.get('/', (req, res) => res.json(transformedD3Data))
            app.listen(port, () => console.log(`\nAvailable on: localhost:${port}`))
            fs.writeFile('data.json', JSON.stringify(transformedD3Data), (err) => err && console.error(err))
        }
    } catch (error) {
        console.error(error)
        fs.writeFile('search.error.json', error)
    }
})()
