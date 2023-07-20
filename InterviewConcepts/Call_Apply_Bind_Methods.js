//They are all JavaScript in-built methods used to deal with objects and methods.

//Call(): We call the method of an existing object into a new object.

const pet1 = {animal:"cat",
sayTypeOfAnimal : function(){
    return this.animal
}};

const pet2 = {animal:"dog"};

console.log(pet1.sayTypeOfAnimal());
console.log(pet1.sayTypeOfAnimal.call(pet2))

// With Call() we can also add objects to a function

function sayHello() {
    console.log(`Hello, ${this.name}`)
}

const person1 = {name: "Javi"}
const person2 = {name: "Chari"}

sayHello.call(person1)
sayHello.call(person2)

//We can add arguments to it
// function sayHelloAndSthElse(message) {
//     console.log(`Hello, ${this.name}, you are ${message}`)
// }

// const person3 = {name: "Javi"}
// const person4 = {name: "Chari"}

// sayHelloAndSthElse.call(person3, "awesome")
// sayHelloAndSthElse.call(person4, "the best")

// apply() is the same as call() but it takes an array as argument
function sayHelloAndSthElse(message) {
    console.log(`Hello, ${this.name}, you are ${message}`)
}

const person3 = {name: "Javi"}
const person4 = {name: "Chari"}

sayHelloAndSthElse.apply(person3, ["awesome"])
sayHelloAndSthElse.apply(person4, ["the best"])

//bind(): this method returns a new function, where the value of "this" keyword will be bound to the owner of the object, which is provided as a parameter.
// En realidad nos permite usar el método de un objeto, en este caso el objeto es "bikeDetails" con su método "displayDetails(param1, param2)". Luego otro objeto
// puede usar ese método a través de bind "bikeDetails.displayDetails.bind(personaEjemplom, param1, param2)"

const bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
        console.log(this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName)
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
let person5 = {name:  "Vivek"};
// Binds the displayDetails function to the person1 object     
let detailsOfPerson1 = bikeDetails.displayDetails.bind(person5, "TS0122", "Bullet");

//Call() does the same, we can also create a function to do the same as bind()
let person6 = {name: "Tom"}
let function2 = () => {bikeDetails.displayDetails.call(person6, "8889", "bikeforever")};

console.log(person5, person6)

      

        
      
detailsOfPerson1();
function2()
//Returns Vivek, bike details: TS0122, Bullet


