// // Traditional Function Expression
// var add = function(a,b){
//     return a + b;
// }

// // Arrow Function Expression
// var arrowAdd = (a,b) => a + b;

// // Traditional function expression
// var multiplyBy2 = function(num){
//     return num * 2;
// }
//   // Arrow function expression
// var arrowMultiplyBy2 = num => num * 2;

// var obj1 = {
//     valueOfThis: function(){
//         return this;
//     }
// }
// var obj2 = {
//     valueOfThis: ()=>{
//         return this;
//     }
// }

// obj1.valueOfThis(); // Will return the object obj1
// obj2.valueOfThis(); // Will return window/global object


function fun() {
    console.log(arguments);
}
//arguments is a special array-like object containing the list of arguments with which the function has been invoked.
fun('a', 'b'); // prints { 0: 'a', 1: 'b'}

//The arguments object is resolved lexically: the arrow function accesses arguments from the closest outer non-arrow function.

function fun1() {
    const fun2 = () => {
    console.log(arguments);
}

fun2('c', 'd');
}

fun1('a', 'b'); // prints { 0: 'a', 1: 'b' }

let obj = {
    a: 100,
    fun1() {
        let a = 20;
        let fun2 = () => {
            console.log(this.a);
        }
        fun2();
    }
}

obj.fun1();