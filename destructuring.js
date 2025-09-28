// DESTRUCTURING
// Extract values from arrays or objects easily.

const person = { name: "Ayoola", age: 20, country: "Nigeria" };

// Object destructuring
const { name, age } = person;
console.log(name, age);

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second);
