// Shout out naar folkert voor deze
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
        return new Promise((resolve, reject) => {
            let combineUrl = this.getUrl(endpoint, params)
            axios.get(combineUrl)
            .then(response => {
                console.log(chalk.cyan(combineUrl))

                return convert.xmlDataToJSON(response.data)
            })
            .then (response => {
                return keySearch ? jp.query(response, `$..${keySearch}`) : response
            })
            .then(response => {
                return resolve({
                    data: response,
                    url: combineUrl
                })
            })
            .catch(err => {
                console.log(chalk.red(combineUrl));
                console.error(chalk.red(err));
                return reject(err)
            })
        })
    }
}
