// Immediately load the dotenv file if the environment is not production.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

const fs = require('fs')
const queryString = require('query-string')
const parser = require('xml2json')
const axios = require('axios')

class OBA {
    constructor(options) {
        this.publicKey = options.public
        this.secretKey = options.secret
    }

    get(endpoint, params) {
        const baseUrl = 'http://obaliquid.staging.aquabrowser.nl/api/v1/'
        const path = endpoint + '/'

        return new Promise((resolve, reject) => {
            const sortedQuery = queryString.stringify(params)

            axios.get(baseUrl + path + '/?authorization=' + this.publicKey + '&' + sortedQuery)
                .then(res => res.data)
                .then(xml => parser.toJson(xml))
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
}

// Setup authentication to api server
const client = new OBA({
    public: process.env.publicKey,
    secret: process.env.secretKey,
})

// General usage:
// client.get({ENDPOINT}, {PARAMS});
// ENDPOINT = search | details | refine | schema | availability | holdings
// PARAMS = API url parameter options (see api docs for more info)

// Client returns a promise which resolves the APIs output in JSON

client.get('details', {
  q: 'held',
  sort: 'title'
})
  .then(res => {
      console.log(res)
      fs.writeFile('data.json', res)
  })
  .catch(err => console.log(err))
