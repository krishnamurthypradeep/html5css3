
// function greet(name){
//   return `Hello ${name}!`
// }


// Java Lambda Functions
// name -> "Hello" + name

// Arrow Functions
var cb = name => `Hello ${name}!`

function processInput(cb) {
  var name = "Alice"
  console.log(cb(name))
}
processInput( cb)

// map filter reduce
