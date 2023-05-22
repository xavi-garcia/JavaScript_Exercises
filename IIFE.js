//An Immediately Invoked Function (IIFE) in JavaScript is a function that is executed as soon as it is defined. It is often used to create a private scope for variables and functions, to avoid naming conflicts and to keep code organized.

//An IIFE usually looks like this:

(function() {
    // Code goes here
})();

//Here are some examples of how an IIFE can be used:
//1.Creating a private scope for variables:

(function (){
    var x = 10;
    console.log(x); // Output: 10
})();
  
console.log(x); // Output: Uncaught ReferenceError: x is not defined
  
//2.Creating a module with private and public variables:

var myModule = (function (){
    var privateVar = "I am a private variable";
    function privateFunction() {
      console.log("This is a private function");
    }
    return {
      publicVar: "I am a public variable",
      publicFunction: function() {
        console.log("This is a public function");
        console.log(privateVar);
        privateFunction();
      }
    };
})();
  
console.log(myModule.publicVar); // Output: I am a public variable
myModule.publicFunction(); // Output: This is a public function
                             //         I am a private variable
                             //         This is a private function
  
