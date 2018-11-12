import { Query, Facet, Result } from "./types/Query"
import { Book } from "./types/Book";

const API = require('node-oba-api-wrapper')
const getters = require('./getters.ts')

// API
const client = new API({
    public: process.env.PUBLIC,
    secret: process.env.SECRET,
})

const search = async (query: Query, facet: Facet): Promise<Result[]> => {
    const maxBookAge = Number(process.env.MAX_BOOK_AGE)

    return await client.get('search', {
        q: query,
        librarian: true,
        refine: true,
        facet,
        count: 500,
        filter: result => {
            const publicationYear = getters.getYearOfPublicationFromResult(result)
            const currentYear = new Date().getFullYear()

            return publicationYear >= currentYear - maxBookAge
        }
    })
}

const queryBooksByLanguage = async (language: string): Promise<Book[]> => {
    const results = await search(`language:${language}`, ['type(book)'])
    const transformedBooks = results && getters.getBooksFromResults(results)

    return transformedBooks && getters.getBooksByLanguageFromBooks(transformedBooks, language)
}

module.exports = { queryBooksByLanguage }