// THanks Folkert-Jan
const axios = require('axios')
const convert = require('xml-to-json-promise')
const jp = require('jsonpath')
const chalk = require('chalk')

module.exports = class api {
    constructor(options) {
        this.url = options.url,
        this.key = options.key
    }

    stringify(object) {
        const keys = Object.keys(object)
        const values = Object.values(object)
        return keys.map((key, i) => `&${key}=${values[i]}`).join('')
      }

    getUrl(endpoint, params) {
        let checkForParams = params ? this.stringify(params) : params
        return this.url + endpoint + '/?authorization=' + this.key + checkForParams
    }

    get(endpoint, params = '', keySearch = '') {
        return new Promise(async (resolve, reject) => {
            let combineUrl = this.getUrl(endpoint, params)

            try {
                const response = await axios.get(combineUrl)
                console.log(chalk.cyan(combineUrl))
                const json = await convert.xmlDataToJSON(response.data)
                const data = await keySearch
                    ? jp.query(json, `$..${keySearch}`)
                    : json

                return resolve({
                    data,
                    url: combineUrl
                })
            } catch (error) {
                console.log(chalk.red(combineUrl))
                console.error(chalk.red(error))
                return reject(error)
            }
        })
    }
}
