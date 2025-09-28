// CLASSES IN JAVASCRIPT (ES6)
// A class is a blueprint for creating objects with shared properties and methods.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}, and I am ${this.age} years old.`;
  }
}

// Usage
const ayoola = new Person("Ayoola", 20);
console.log(ayoola.greet());
