//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
//If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2){
//     const isEven1 = flower1 % 2 == 0 ? true : false;
//     const isEven2 = flower2 % 2 == 0 ? true : false;
//     if(isEven1 == true && isEven2 == false || isEven1 == false && isEven2 == true){
//         console.log(true)
//         return true;

//     } else {
//       console.log(false)
//       return false
//     }
// };

//------------------------------------------------------------------------------------------------------------------------------------------------------//

//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     let total = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             total += arr[i]
//         }
//     }

//     const result = total > 0 ? total : 0;
//     console.log(result)
//     return result;
  
// }

// const array1 = [1, -4, 7, 12]
// positiveSum(array1)

// function positiveSum(arr) {
// const positivesSum = arr.reduce((accumulator, currentValue) => currentValue > 0 ?  accumulator + currentValue : accumulator, 0);
// console.log(positivesSum)
  
// }

//-----------------------------------------------------------------------------------------------------------------------------------//
//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
//that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// var min = function(list){
//     let minumun = list.reduce((acc, curr) => acc < curr ? acc : curr);
//     return minumun;
// }

// var max = function(list){
//     let maxmimum = list.reduce((acc, curr) => acc > curr ? acc : curr);
//     return maxmimum;
// }

// const numbersArray = [-52, 56, 30, 29, -54, 0, -110]

// max(numbersArray);
// min(numbersArray);

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// function maximo (lista) {

//     let max = lista[0]
//     for(let i = 0; i < lista.length; i++){
//         if (lista[i] > lista[0]){
//             max = lista[1]
//         }
//     }

//     console.log(max);
//     return max
// }

// maximo(numbersArray)

//-----------------------------------------------------------------------------------------------------------------------------------//

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either.
//Return true if the array contains the value, false if not.

// function check(a, x) {
//     let value = a.includes(x);
//     let result = value ? true : false;
//     console.log(result)
//     return result
// }

// let array = ["a", 2, 5]
// let v = 10

// check(array, v)

// function check(a,x){
//     for(let i = 0; i < a.length; i++){
//         if(a[i] === x){
//             console.log(true)
//             return true;
//         } else {
//             console.log(false)
//             return false;
//         }
//     }
// }
//-----------------------------------------------------------------------------------------------------------------------------------//
//We need a function that can transform a number (integer) into a string.
//What ways of achieving this do you know?
//Examples (input --> output):
// function numberToString(num) {
//   let string = num.toString();
//   return string;
// }

// let number = 89;
// numberToString(number)
//-----------------------------------------------------------------------------------------------------------------------------------//

//In this simple assignment you are given a number and have to make it negative. 
//But maybe the number is already negative?

// function makeNegative(num) {
//     let turnNegative = -Math.abs(num);
//     let result = num > 0 ? turnNegative : num;
//     console.log(result);
//     return result
// };

// function makeNegative(num) {
//     return num < 0 ? num : -num;
// }

// makeNegative(0)

//-----------------------------------------------------------------------------------------------------------------------------------//
//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//35231 => [1,3,2,5,3]

// function digitize(n) {
// let newArray = [];
// if(n === 0){
//     newArray.push(n)
// }
// while(n > 0){
//     let digit = n % 10;
//     newArray.push(digit);
//     n = Math.floor(n / 10)
// }
// console.log(newArray)
// }

// digitize(0)

// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
// }

// function digitize(n) {
//     return n.toString().split("").reverse().map(Number);
// }

//-----------------------------------------------------------------------------------------------------------------------------------//
//Summation
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// var summation = function (num) {
//    let sum = 0;
//    let array = [];
//    for(let i = 1; i <= num; i++){
//     sum =+ i // es +=
//     array.push(i)
//    }
//    let totalSum = array.reduce((acc, curr)=> acc + curr, 0)
//    return totalSum
// }

// summation(2)

// var summation2 = function (num) {
//     let result = 0;
//     for (var i = 1; i <= num; i++) {
//       result += i;
//     }
//     console.log(result)
//     return result;
// }
// summation2(8)

//-----------------------------------------------------------------------------------------------------------------------------------//

//Write a function named setAlarm which receives two parameters. 
//The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). 
//It should return false otherwise. Examples:
//setAlarm(true, true) -> false
//setAlarm(false, true) -> false

// function setAlarm(employed, vacation){
    
//     if(employed && !vacation){
//         console.log(true)
//         return true
//     } else
//     console.log(false)

// }

// const setAlarm = (employed, vacation) => employed && !vacation

// setAlarm(false, true)

//-----------------------------------------------------------------------------------------------------------------------------------//
//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//This function should return a number (final grade). There are four types of final grades:
//100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//0, in other cases

// function finalGrade (grade, projects){
//     let finalGrade = 0;
//     if( grade > 90 || projects > 10){
//         console.log(100);
//         return 100
//     } else if (grade > 75 && projects >= 5){
//         console.log(90);
//         return 90
//     } else if (grade > 50 && projects >= 2){
//         console.log(75);
//         return 75
//     } else {
//         console.log(0);
//         return 0
//     }
// }

// const finalGrade = (exam, projects) => {
//     return (
//       exam > 90 || projects > 10 ? 100 :
//       exam > 75 && projects >= 5 ? 90 :
//       exam > 50 && projects >= 2 ? 75 : 0
//     )
// }

// finalGrade(55, 0)

//-----------------------------------------------------------------------------------------------------------------------------------//
//Write a function that takes an array of numbers and returns the sum of the numbers.
//The numbers can be negative or non-integer. 
//If the array does not contain any numbers then you should return 0.

//Examples
//Input: [1, 5.2, 4, 0, -1]
//Output: 9.2

//Input: []
//Output: 0

//Input: [-2.398]
//Output: -2.398

//Assumptions
//You can assume that you are only given numbers.
//You cannot assume the size of the array.
//You can assume that you do get an array and if the array is empty, return 0.
//What We're Testing
//We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
//Advanced users may find this extremely easy and can easily write this in one line.

// function sum (numbers) {
//     let positiveNumbers = 0;
//     let negativeNumbers = 0;
//     if(numbers.length === 1){
//         console.log(numbers[0])
//     }
//     for (let i = 0; i <= numbers.length; i++){
//         if (numbers[i] > 0){
//             positiveNumbers += numbers[i]
//         }
//     }
//     for (let i = 0; i <= numbers.length; i++){
//         if (numbers[i] < 0){
//             negativeNumbers += numbers[i]
//         }
//     }
//     const result = positiveNumbers - Math.abs(negativeNumbers)  ;
//     console.log(result)
    
// };

// sum([-12]);
// add([1, 5.2, 4, 0, -1])

// function add (numbers){
//     let result = numbers.reduce((acc, curr) => 
//         acc + curr
//     )
//     console.log(result)
// }