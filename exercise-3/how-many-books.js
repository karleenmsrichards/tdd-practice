const books = require('./books.json')

// This function should return the number of books matching the criteria:
//  - pictures (required boolean parameter):
//      - if this parameter is true, only count picture books
//      - if this parameter is false, only count non-picture books
//      - if this parameter is not passed, throw an error
//  - maxPages (optional number parameter):
//      - only count books with less than or equal to the maxPages value
//      - if the parameter is not passed, count books of any length
function howManyBooks(pictures, maxPages) {
}

module.exports = howManyBooks
