// SPREAD OPERATOR (...)
// Expands elements of an array or object.

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log(combined);

const person = { name: "Ayoola", age: 20 };
const newPerson = { ...person, country: "Nigeria" };
console.log(newPerson);
