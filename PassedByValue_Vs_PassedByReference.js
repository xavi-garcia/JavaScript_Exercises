// Passed by Value vs Passed by Reference

//In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

//Passing by value means that a copy of the value is passed to a function. Any changes made to the value within the function won’t affect the original value.

//Passing by reference means that a reference to the original value is passed to a function. Any changes made to the value within the function will affect the original value as well.

//In JavaScript, primitive types (such as numbers, strings, and booleans) are passed by value, while objects are passed by reference.


var y = 234; // cuando se declara una variable y se le asigna un valor en realidad el operador de asignación = lo que hace es asignarle un especio en memoria. Posición en memoria #5795
var z = y; // en este caso el operador de asignación toma el valor de "y" y le asigna un nuevo lugar en la memoria. No hace referencia a la variable sino a su posición en memoria. #1532 nuevo espacio en memoria con el valor de "y"

y = 23; // se redefine la variable "y". 
console.log(z)
//Entonces el programa declara "y" y le asigna un lugar en memoria,, a "z" le aigna el valor al que hace referecia la posición en memoria y le asigna una posición nueva.
// Y el mecanismo de hoisting no sube el valor de "y" porque solo lo hace con redeclaraciones y esto es una redefinición y si así lo hiciera el valor de "z" va a seguir siendo 234 porque
//"z" tomaría el segundo valor.

//Passed by value means that when a parameter is passed to a function, a copy of the value is made and passed to the function. 
//This copy is independent of the original value and any changes made to it within the function will not affect the original value.

function double(num) {
    num = num * 2;
    return num;
}
  
let a = 5;
console.log(double(a));
console.log(a); // Output: 5

//In the above example, a is passed as a parameter to the function double. 
//The value of a is copied and stored in the num variable within the function. 
//The num variable is then doubled and returned. However, the original value of a remains unchanged because it was passed by value.

//On the other hand, passed by reference means that when a parameter is passed to a function, a reference to that value is passed instead of a copy. This reference points to the location of the original value and any changes made to it within the function will affect the original value as well.

function changeName(obj) {
    obj.name = "Sarah";
}
let person = { name: "John" };
changeName(person);
console.log(person.name); // Output: Sarah

//In the above example, person is passed as a parameter to the function changeName. 
//The reference to the person object is passed and stored in the obj variable within the function. 
//The name property of the obj variable is then changed to "Sarah". 
//Since the person object and obj variable reference the same object in memory, the name property of the person object is also changed to "Sarah".
  
  
