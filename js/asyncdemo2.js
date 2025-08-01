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

const sortOrders= (cb)=>{

  setTimeout(() => {
  cb(products.sort((a,b) => a.price - b.price))
  }, 1000)
}
function callback(sortedProducts){
  console.log('Sorted Products:', sortedProducts)
}

sortOrders(callback)

console.log('Outside Async Function: ')
