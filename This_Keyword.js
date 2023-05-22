function doSomething() {
    console.log(`Hello, ${this.name}`)
}

const person1 = {name: "Javi"};
const person2 = {name: "Naruto"};
     
doSomething.call(person1);

function Car(make, model) {
    this.make = make;
    this.model = model;
}
  
const myCar = new Car('Tesla', 'Model S');
console.log(myCar.make); // 'Tesla'
  