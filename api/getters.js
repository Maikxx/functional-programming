/**
* Function that searches the result object for the frabl id, which can be used to query a detail page.
*
* @param {object} result
* @returns {string} A string which contains the frablId.
*/
const getFrablIdFromResult = result => {
    return result.frabl
        && result.frabl.$t
        || undefined
}

/**
* Function that searches the result object for the regular title.
*
* @param {object} result
* @returns {string} A string which contains the title of the book.
*/
const getRegularTitleFromResult = result => {
    return result.titles
        && result.titles.title
        && result.titles.title.$t
        || undefined
}

/**
* Function that searches the result object for the short title.
*
* @param {object} result
* @returns {string} A string which contains the short title of the book.
*/
const getShortTitleFromResult = result => {
    return result.titles
        && result.titles[`short-title`]
        && result.titles[`short-title`].$t
        || undefined
}

/**
* Function that searches the result object for the publication year and transforms it to a number.
*
* @param {object} result
* @returns {number} Year in which the book is published.
*/
const getYearOfPublicationFromResult = result => {
    return result.publication
        && result.publication.year
        && result.publication.year.$t
        && Number(result.publication.year.$t)
        || undefined
}

/**
* Function that searches the result object for the languages and transforms it to an array of strings.
*
* @param {object} result
* @returns {Array} Array of languages.
*/
const getLanguageFromResult = result => {
    return result.languages
        && result.languages.language
        && result.languages.language.$t
        || undefined
}

/**
* Function that searches the result object for the genre and transforms it to an array of strings.
*
* @param {object} result
* @returns {Array} Array of genres.
*/
const getGenreFromResult = result => {
    return result.genres
        && result.genres.genre
        && result.genres.genre.$t
        || undefined
}

/**
* Function that loops through the results and gives back a new format.
*
* @param {object} results
* @returns {Array} Array of transformed results or an empty array.
*/
const getTransformedResultsFromResults = results => {
    return results && results.map(result => ({
        frablId: getFrablIdFromResult(result),
        titleCollection: {
            regular: getRegularTitleFromResult(result),
            short: getShortTitleFromResult(result),
        },
        yearOfPublication: getYearOfPublicationFromResult(result),
        language: getLanguageFromResult(result),
        genre: getGenreFromResult(result),
    }))
}

/**
* Function that loops through the transformed results and gives back the English or Dutch books.
*
* @param {object} transformedResults
* @returns {Array} Array of transformed results which have the language Dutch or English.
*/
const getBooksByLanguageFromTransformedResults = (transformedResults, language) => {
    return transformedResults
        ? transformedResults.filter(transformedResult => language === transformedResult.language)
        : []
}

/**
* Function that loops through the transformed results and gives back the English and Dutch books.
*
* @param {object} englishAndDutchBooks
* @returns {object} Object which contains two key value pairs (Dutch and English books, which are arrays)
*/
const getSortedEnglishAndDutchBooks = (dutchBooks, englishBooks) => {
    return (dutchBooks && englishBooks)
        ? {
            "dut": dutchBooks,
            "eng": englishBooks,
        }
        : {}
}

module.exports = {
    getTransformedResultsFromResults,
    getBooksByLanguageFromTransformedResults,
    getSortedEnglishAndDutchBooks,
}