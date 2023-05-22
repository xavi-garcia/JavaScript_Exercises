

// VAR
//A variable declared using ‘var’ can be redefined and even redeclared anywhere throughout its scope.

// BOTH Redeclared and Redifined

// REDECLARED
var y = 10;
console.log(y); //prints 10
var y = "Hello"; //Redeclaring (works without any error)
console.log(y) //Prints "Hello"


//REDEFINED
var x = 30;
console.log(x); //prints 30
x = "Hi"; //redefining or re-assigning (works without any error)
console.log(x); //prints "Hi"

var z = 13;
if(true){
   var z = "Fun"; //works without any error as scope is different.
   console.log(z) //prints "Fun"
}
console.log(z) //prints "Fun"

//LET 
// A variable declared using ‘let’ can be redefined within its scope but cannot be re-declared within its scope.

let x = 11;
console.log(x); //prints 11
x = "IB"; //works without any error
console.log(x); //prints "IB"

let y = 12;
console.log(y); //prints 12
let y = "Scaler"; // error: Identifier y has already been declared

let z = 13;
if(true){
   let z = "Fun"; //works without any error as scope is different.
   console.log(z) //prints "Fun"
}
console.log(z) //prints 13

//A variable declared using ‘const’ cannot be redefined or re-declared within its scope.

const x = 10;
console.log(x); //prints 10
x = 11; // error: Assignment to constant variable.

// const y;
// y = 2; //error

const z = 12;
console.log(z) //prints 12
const z = 13; // error: Identifier 'z' has already been declared

//Every const declaration must be initialized at the time of declaration.