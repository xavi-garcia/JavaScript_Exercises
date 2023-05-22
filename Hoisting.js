//Hoisting

//Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.

 

console.log(x); // prints undefined
var x = 100;
console.log(x); //prints 100


//Variables declared using var are hoisted to the top of their scope and initialized with a value of undefined(special type).
//Variables declared using let are hoisted to the top of their scope but are not initialized with any value.
//Variables declared using const are hoisted to the top of their scope but are not initialized with any value.
 


console.log(x); // prints undefined
var x = 100;
console.log(x); //prints 100

console.log(y); //Reference error
let y = 200;
console.log(y); //prints 200

console.log(z); //Reference error
const z = 300;
console.log(z); //prints 300
 
//Try the following example in the editor below.

//Predict the output of the following code:

var a = 10;
{
    var a = -10;
}

let b = a;
{
    let b = -20;
}

console.log("RESULT", b) 
// Output should be -10. It initialized a with the value of 10 but then it re-declares it with the value of -10 but since it's a var declaration in can be
// re-declared anywhere in the code, regardless of its scope. Then, the variable let is declared and initialize with the value of a, which is "-10". It is then re-defined
// in a block of code but since the console.log exists outside that block of code we cannot access it.


