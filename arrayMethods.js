// ARRAY METHODS
const numbers = [1, 2, 3, 4, 5];

// forEach → loop through array
numbers.forEach(num => console.log(num));

// map → create a new array
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter → returns elements that match condition
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// reduce → reduces array to a single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
