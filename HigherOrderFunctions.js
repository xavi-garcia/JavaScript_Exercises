//REDUCE

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum); // Output: 15

//Using reduce to flatten an array of arrays:
const array3 = [[1, 2], [3, 4], [5, 6]];
const flattened = array3.reduce((acc, curr) => {return acc.concat(curr)}, []);
// console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

//Using reduce to find the maximum value in an array:
const array4 = [10, 5, 20, 15, 30];
const max = array4.reduce((acc, cur) => {if(acc > cur) {return acc} else { return cur}}, array4[0]);
// console.log(max); // Output: 30

//Using reduce to count the occurrence of an element in an array:
const array5 = [1, 2, 3, 4, 3, 2, 1, 1, 2, 3];
const count = array5.reduce((acc, cur) => {if(cur in acc) {acc[cur]++} else {acc[cur] = 1;} return acc}, {});
// console.log(count); // Output: {1: 3, 2: 3, 3: 3, 4: 1}

//Using reduce to group an array of objects by a key:
const array6 = [
    {name: 'John', age: 30},
    {name: 'Kate', age: 25},
    {name: 'Tom', age: 35},
    {name: 'John', age: 40}
];
const grouped = array6.reduce((acc, cur) => {const key = cur.name;
if(!acc[key]) {
    acc[key] = [];
}
    acc[key].push(cur);
    return acc;
}, {});
// console.log(grouped); // Output: {John: [{name: 'John', age: 30}, {name: 'John', age: 40}], Kate: [{name: 'Kate', age: 25}], Tom: [{name: 'Tom', age: 35}]}

//_______________________________________________________________________________________________________________________________________________________________//
const arrayEjercicio = [17, 23, 18, 150];
const arrayProducts = [
                    {   "products": "eggs",
                        "price": 150,
                        "quantity": 5
                    },
                    {   "products": "tomatoes",
                        "price": 90,
                        "quantity": 2
                    },
                    {  "products": "carrots",
                        "price": 70,
                        "quantity": 3
                    },
                ]

const sumaTotal = arrayEjercicio.reduce((acc, curr ) => acc + curr);
console.log("EJERCICIO I", sumaTotal)

const maxValue = arrayEjercicio.reduce((acc, curr) => acc > curr ? acc : curr );
console.log('EJERCICIO II', maxValue);

const finalAmount = arrayProducts.reduce((acc, item) => acc + item.price, 0);
console.log('EJERCICIO III', finalAmount);

const totalPrice = arrayProducts.reduce((acc, prod) => prod.quantity * prod.price + acc, 0);
console.log('EJERCICIO IV', totalPrice);

