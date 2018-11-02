const OBA = require("oba-api")

const sanitiseOptionObject = (options, page, rctx) => {
	const customOptions = ["count", "filter"]
	const safeOptions = Object.keys(options)
		.filter(key => !customOptions.includes(key))
		.reduce((obj, key) => ({
            ...obj,
            [key]: options[key]
        }), {})

	if (rctx) {
        safeOptions.rctx = rctx
    }

	if (page) {
        safeOptions.page = page
    }

    console.log("Page:", page, "Context:", (rctx || "Null").slice(0, 15))

	return safeOptions
}

module.exports = class OBAWrapper {
	constructor (options) {
		this.client = new OBA(options)
		this.rctx = null
	}

    async get (endpoint, options) {
        const results = []
        let page = 1

		while (results.length < options.count) {
			// Send out initial request
            const response = JSON.parse(await this.client.get(endpoint, sanitiseOptionObject(options, page++, this.rctx)))

			// Get context to speed up following requests.
            if (!this.rctx) {
                this.rctx = response.aquabrowser.meta.rctx
            }

            const maxResults = Number(response.aquabrowser.meta.count)

			if (options.count > maxResults) {
				console.log(`Klein probleempje: Je vroeg ${options.count} resultaten maar ik heb er maar ${maxResults}. Succes ermee.`)
				options.count = maxResults
			}

			// Check if user provided filter
			let __results = response.aquabrowser.results.result
			if (options.filter) {
				__results = __results.filter(result => options.filter(result))
			}

			// Push individual values to skip flattening later
			results.push(...__results)
		}
		// Cull any extra results
		if (results.length > options.count) {
            results.length = options.count
        }

		// Reset context to allow other requests
		this.rctx = null
		return results
	}
}