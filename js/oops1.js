const product ={
  id: 1,
    name: 'Iphone16',
  price: 999.99,
}
console.log(`Product ${product.__proto__}`)

// Interfaces and Abstractions (static typing)

// JavaScript dynamically typed type coercion
class Vehicle{

}
class Car extends Vehicle{

}

// Prototype
let vehicle = {wheels: 4}
let car ={
  seats: 5,
  __proto__: vehicle,

}
console.log(`Wheels ${car.wheels}`)
