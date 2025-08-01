

const asyncFunc =()=> {

  setTimeout(() => {
    console.log('Inside Timeout')
  },0)
}

asyncFunc()
console.log(`Outside Async Function: `)
