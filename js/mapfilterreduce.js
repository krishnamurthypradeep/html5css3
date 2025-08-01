
var products = [
  {
    id: 1,
    name: 'Iphone16',
    price: 999.99,
  },
  {
    id: 4,
    name: 'Iphone16Pro',
    price: 1299.99,
  },
  {
    id: 2,
    name: 'Ipad',
    price: 799.99,
  },
  {
    id: 3,
    name: 'MacbookPro',
    price: 19999.99,
  }
]

// array class filter , map & reduce

// products.filter(product => product.price > 850.0)
//   .forEach(console.log)

var prices = products.filter(product => product.price > 850.0)
  .map(product => product.price)
const min = Math.min(...prices)
const max = Math.max(...prices)
const sum = prices.reduce((acc, val) => acc + val)
const average = prices.length ? sum / prices.length : 0
console.log(`Min Price: ${min} Max Price: ${max} sum ${sum} Average: ${average} `)

// Functional
// OOP
// Event Driven
// Asynchronous
// Single Threaded
// Dynamically Typed
//  Synchronous vs Asynchronous
// Blocking        Non Blocking



