import { Book } from "./types/Book"

const filterBooksByLanguage = (books: Book[], language: string) => {
    return books.filter(transformedResult => language === transformedResult.language)
}

const filterBooksByYear = (books: Book[], year: number) => {
    return books.filter(book => book.yearOfPublication === year)
}

module.exports = {
    filterBooksByLanguage,
    filterBooksByYear,
}