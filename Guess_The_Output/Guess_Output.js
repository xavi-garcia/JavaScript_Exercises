// function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
// }
// }
// func2(); // 3 3 3
//With "var" the variable does not have a block scope so it is incremented to 3, then the setTimeOut returns the value in the console
// with by that time it's already 3. It console logs it 3 times.

// function func2(){
//     for(let i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
// }
// }
// func2(); // 0 1 2





//--------------------------------------------------------------------------------------------------//
// Code 1:

// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]); // {name: “Akki”} //Both x[y] and x[z] are referencing the same property.

// Code 2:

// function runFunc(){
//   console.log("1" + 1);
//   console.log("A" - 1);
//   console.log(2 + "-2" + "2");
//   console.log("Hello" - "World" + 78);
//   console.log("Hello"+ "78");
// }
// runFunc();// 11 / Nan / 2-22 / Nan / Hello78


// Code 3:

// let a = 0;
// let b = false;
// console.log((a == b)); //true
// console.log((a === b)); //false




//--------------------------------------------------------------------------------------------------//

// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++; //
//     console.log(x);
//     var x = 21;
// })();
// })(); // Output : Nan

//  //This is what happens

// function random(){
//     var x; // x is hoisted
//     x++; // x is not a number since it is not initialized yet
//     console.log(x); // Outputs NaN
//     x = 21; // Initialization of x
// }




//--------------------------------------------------------------------------------------------------//

// Code 1

// let hero = {
//     powerLevel: 99,
//     getPower(){
//         return this.powerLevel;
//     }
// } //Tengo un objeto con una propiedad y un método que devuelve la propiedad

// let getPower = hero.getPower; //Instancio el método del objeto en una variable

// let hero2 = {powerLevel:42}; //Creo otro objeto pero sin método.
// console.log(getPower()); // Output : undefined porque llama al window object
// console.log(getPower.apply(hero2)); //Output : 42



// Code 2

// const a = function(){
//     console.log(this); // global/window object

//     const b = {
//         func1: function(){
//         console.log(this); // object "b"
//     }  
//     }

//     const c = {
//         func2: ()=>{
//         console.log(this); //global/window object
//     }
//     }

//     b.func1();
//     c.func2();
// }

// a();



  // Code 3
  
//   const b = {
//     name:"Vivek",
//     f: function(){
//       var self = this;
//       console.log(this.name); "Vivek"
//       (function(){
//         console.log(this.name); Undefined Only in the IIFE inside the function f, this keyword refers to the global/window object
//         console.log(self.name); "Vivek"
//       })();
//     }
//   }
//   b.f();

