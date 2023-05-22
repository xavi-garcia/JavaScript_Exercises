//Implicit Type Coercion is the conversion of value from one data type to another. It happens when the values of an operation are of different types.

//STRING COERCION
//It takes place using the "+" operator. When a NUMBER is added to a STRING, the NUMBER type is always converted to the "STRING" type.
//Note - ‘ + ‘ operator when used to add two numbers, outputs a number. The same ‘ + ‘ operator when used to add two strings, outputs the concatenated string:

let number1 = 3;
let number2 = "3"
console.log(number1 + number2) //Outputs 33

//Note - Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, a STRING is converted to a NUMBER and then subtraction takes place.

console.log(number1 - number2) //Outputs O

//BOOLEAN CONVERSION

//Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop checks. 
//To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.
//TRUTHY VALUE will be converted (coerced) to true. FALSY VALUES  will be converted to false (false, 0, 0n, -0, “”, null, undefined, and NaN).

let falsyValue = 0;
let truthyValue = 23;
        
if(falsyValue) { console.log("El codigo no corre", falsyValue) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(truthyValue) { console.log("El codigo corre", truthyValue) }    // The code inside this block will run since the value of y is 23 (Truthy)

//LOGICAL OPERATORS

//Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.

//OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

//AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

let falsyNull = null;
let undefinedValue = undefined;
let myName = "Javier";
let randomNumber = Math.floor(Math.random() * 10);

console.log(falsyNull || myName) // Outputs "Javier"
console.log(randomNumber || myName) // Outputs a random number

console.log(randomNumber && myName) // Outputs the second one since they are TRUTHY
console.log(falsyNull && undefinedValue) // Outputs null
console.log(falsyNull && "hola") // Outputs null
console.log(myName && falsyNull) // Outputs null

//Básicamente el && operator siempre devuelve el segundo valor a menos que el primero sea falso

if (myName || undefinedValue){
    console.log("truthy or falsy returns something", undefinedValue, myName)
}
 
if(undefinedValue || myName){
    console.log("falsy or truthy returns somethin", undefinedValue, myName)
}


//Equality Coercion
//Equality coercion takes place when using ‘ == ‘ operator.
//The reality is that while using the ‘==’ operator, coercion takes place.
//The ‘==’ operator, converts both the operands to the same type and then compares them.

//Example:

let a = 12;
let b = "12";
a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.