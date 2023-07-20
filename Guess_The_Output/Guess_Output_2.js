// function f(a, b, c) {
// 	m = ["1", "2", "3"];
// 	a = 3;
// 	b[0] = "X";
// 	c.first = false;
// }

// var x = 4;
// var y = ["A", "B", "C"];
// var z = { first: true };

// f(x, y, z);
// console.log(x, y, z);

// function g(a) {
// 	a = { first: true };
// 	console.log(a);
// }

// g(z);
// console.log(z);

//4
//["X","B","C"]
//{"first":false}
//{"first":true}
//{"first":false}

//Example 1: When (x, y, z) is logged, x gives value 4 (as primitives are passed by value, and hence its value does not change even after function f()). y is an array, hence an object, and so it is passed by reference and its index 0 gets changed to X. So y logs X, B, C. Inside function f(), c.first has been changed to false and since it is passed by reference, it logs first: false. In function g(), a new object is created with the value true and so it logs first: true. Finally, in the last line, z.first is still equal to false and hence it logs first: false.

//------------------------------------------------------------------------------------------//


// function foo1() {
//     return {
// 	bar: "hello"
// 	}
// }
	
// function foo2() {
// 	return
// {
// bar: "hello";
// }
// }
	
// console.log(foo1());
// console.log(foo2());

//{bar:"hello"} 
//undefined

//Example 2: In foo1(), the bar object is returned as it should and hence it gives the output {bar:”hello”}. But in foo2(), the newline after the return is interpreted differently. It implicitly puts a semicolon after the return and the corresponding set of lines is treated as a block of statements. So foo2() has the following return statement- return; which gives output as undefined.


//----------------------------------------------------------------------------------------------------------------------------------------------------------------//

// for (var i = 0; i < 5; i++) {
//     (function(x) {
//         setTimeout(function() {
//             console.log(x);
//         }, 1000 );
//     })(i);
// }
// 0 1 2 3 4

//Example 4: With the help of an Immediately Invoked Function Expression (IIFE), its own scope will be created, and we can pass i to the function. Variable i will be a local variable and the value of i in every loop will be preserved and finally printed after a timeout of 1 second.

//-------------------------------------------------------------------------------------------------------------//


// var x= 5;
// function check(){
// y = 10;
// console.log(x);
// var x =10;
// }

// function check2(){
// console.log(y);
// }

// check();
// check2();


//undefined 
//10




console.log("4"+5*5)
