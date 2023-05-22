//NaN stands for Not a Number. It indicates any value that is not a number
// However, if we check its type with typeof it's "Number".
//Aparte de ser un tipo de dato también tiene un método isNan()

console.log(typeof NaN);
console.log(typeof isNaN())

console.log(isNaN("Hello"))  // Returns true
console.log(isNaN(345))   // Returns false
console.log(isNaN('1'))  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
console.log(isNaN(true)) // Returns false, since true converted to Number type results in 1 ( a number)
console.log(isNaN(false)) // Returns false
console.log(isNaN(undefined)) // Returns true