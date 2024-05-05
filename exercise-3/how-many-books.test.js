const howManyBooks = require("./how-many-books")

// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/expect

// Run tests with: npm test -- how-many-books.test.js

describe("how many books", () => {
    // if this parameter is not passed, throw an error
    test('should throw error if pictures parameter is not provided', () => {
        expect(() => howManyBooks()).toThrow();
    });

    //  pictures (required boolean parameter):
    // if this parameter is true, only count picture books
    test('should count all picture books if pictures parameter is true', () => {
        expect(howManyBooks(true)).toBe(4);
    });

    // if this parameter is false only count non-picture books
    test('should count all non-picture books if parameter is false', () => {
        expect(howManyBooks(false)).toBe(11);
    });

     // count books where maxPages paramenter is equal to or less than numberOfPages value 
    test('should count books with no picture and maxPages paramenter is equal to or less than numberOfPages value', () => {
        expect(howManyBooks(false, 200)).toBe(8);
    });

     // count books where maxPages paramenter is equal to or less than numberOfPages value 
    test('should count books with picture and maxPages paramenter is equal to or less than numberOfPages value', () => {
        expect(howManyBooks(true, 300)).toBe(3);
    });
})
