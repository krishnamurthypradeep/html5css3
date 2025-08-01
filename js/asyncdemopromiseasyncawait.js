const products = [
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

const sortOrders= ()=>{
return new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve(products.sort((a,b) => a.price - b.price))
  }, 1000)

})

}

const main= async ()=>{
  const sortedProducts = await sortOrders()
  console.log(sortedProducts)
}

main()
console.log('Outside Async Function: ')

// OOP 1. prototype based and class based
