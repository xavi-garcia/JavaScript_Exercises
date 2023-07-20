const { property } = object;

const person = { name: "John", age: 25, city: "New York" };
const { name, age } = person;
console.log(name); // "John"
console.log(age); // 25

const { name: personName, age: personAge } = person;
console.log(personName); // "John"
console.log(personAge); // 25

const user = { name: "Alice", address: { city: "Toronto", country: "Canada" } };
const { address: { city } } = user;
console.log(city); // "Toronto"

//Arrays

const [ element ] = array;

const fruits = [ "apple", "banana", "orange" ];
const [ firstFruit, secondFruit ] = fruits;
console.log(firstFruit); // "apple"
console.log(secondFruit); // "banana"

const [ , , thirdFruit ] = fruits;
console.log(thirdFruit); // "orange"


const [ first, ...rest ] = fruits;
console.log(first); // "apple"
console.log(rest); // ["banana", "orange"]

