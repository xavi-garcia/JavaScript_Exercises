//EXEC()
let text = "The best things in life are free";
let result = /e/.exec(text);
console.log(result) //['e', index: 2, input: 'The best things in life are free', groups: undefined]

let text2 = "Hello world!";

// Look for "Hello"
let result1 = /Hello/.exec(text2);

console.log(result1) //[ 'Hello', index: 0, input: 'Hello world!', groups: undefined ]

//TEST()

let text3 = "The best things in life are free"; 
let pattern = /e/;
let result3 = pattern.test(text3);