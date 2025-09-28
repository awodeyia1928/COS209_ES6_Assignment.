// ARROW FUNCTIONS
// Shorter syntax for writing functions.
// They do not bind their own 'this'.

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));       // 5
console.log(addArrow(2, 3));  // 5
