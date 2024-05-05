const calculateTotal = require("./calculate-total")

// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/expect

// Run tests with: npm test -- calculate-total.test.js

describe("calculate total", () => {

     //should return 0 if basket is empty
     test('should return 0 if basket is empty', () => {
        expect(calculateTotal([])).toBe(0);
    });
    //should sum basket items
    test('should sum basket items', () => {
        expect(calculateTotal([{ "item": "Milk", "price": 2 }, {"item": "Honey", "price": 5, } ])).toBe(7);
    });

    //should return basket total rounded to 2 decimal places
    test('should return basket total rounded to 2 decimal places', () => {
        expect(calculateTotal([	{
            "item": "Potatoes",
            "price": 0.8
        },
        {
            "item": "Tomatoes",
            "price": 2.3
        }, ])).toBe(3.10);
    });
    
})
