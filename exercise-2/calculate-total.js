const prices = require('./prices.json')

// This function should calculate the total price of the items in the basket
//  - the basket is an array of objects, where each object contains an item and quantity
//  - for example: [ { "item": "Milk", "quantity": 2 } ]
function calculateTotal(basket) {
    console.log(basket)
    total = basket.map((obj) => obj.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2);
    return parseFloat(total);
}

module.exports = calculateTotal
