
function greet(name){
  return `Hello ${name}!`
}

function processInput(cb) {
  var name = "Alice"
  console.log(cb(name))

}

processInput(greet)
