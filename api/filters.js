const getters = require('./getters.js')

const filterByPublicationYear = (result, maxBookAge) => {
    const publicationYear = getters.getYearOfPublicationFromResult(result)
    const currentYear = new Date().getFullYear()

    return publicationYear >= currentYear - maxBookAge
}

module.exports = {
    filterByPublicationYear,
}