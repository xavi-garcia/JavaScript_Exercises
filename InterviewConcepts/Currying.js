//Non-curried function
const add = (a, b, c) => {
    return a + b +c
};
console.log(add(2,4,5));

//Curried Function
const addCurry = (a) =>{
    return function(b) {
        return function (c) {
            return a+b+c
        }
    }
};
console.log(addCurry(2)(4)(5));


//Curry function
function sendRequest(greet) {
    return function(name){
        return function(message){
            return `${greet} ${name} ${message}`
        }
    }
};
console.log(sendRequest('hello')('Javi')('I would like to connect'));


//Curry function of Ingredients

function pancakeIngredients(ingredient1){
    return function(ingredient2){
        return function(ingredient3){
            return `For this pancake you need ${ingredient1}, ${ingredient2} and ${ingredient3}`
        }
    }
};

console.log(pancakeIngredients("eggs")("flour")("sugar"));

//Advanced Currying function
const curry = (fn) =>{
    return curried = (...args) => {
        if(fn.length !== args.length){
            return curried.bind(null, ...args)
        }
        return fn(...args);
    };
}

const totalNum = (x, y, z) => {
    return x + y + z
}

const curriedTotal = curry(totalNum);
console.log(curriedTotal(10) (20) (30));  

//Application with ECS6 and arrow functions 
const sendRequest2 = greet2 => name2 => message2 => `${greet2} ${name2}, ${message2}`;
console.log(sendRequest2("Hi")("Javi")("you are hired!"))
