

function  outer(x){
  return function (y) {
    return x + y
  }
}

var result = outer(10)(20)
console.log(result)

var returnFn  = outer(20)
console.log(returnFn(30))

