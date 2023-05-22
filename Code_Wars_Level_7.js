//The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
//They would like your help with an application form that will tell prospective members which category they will be placed.
//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
//In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

//Input
//Input will consist of a list of pairs. Each pair contains information for a single potential member. 
//Information consists of an integer for the person's age and an integer for the person's handicap.

//Output
//Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

//Example
//input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// function openOrSenior(data){
//     let result = data.map(arr => arr[0] >= 55 && arr[1] > 7 ? "Senior" : "Open");
//     console.log(result)
// };

// read the array and enter each array with two values
//read the values
// return open or senior

// openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Implement a function that adds two numbers together and returns their sum in binary. 
//The conversion can be done before, or after the addition.
//The binary number returned should be a string.
//Examples:(Input1, Input2 --> Output (explanation)))

// function addBinary(a,b) {

//     let sum = a + b;
//     let binary = sum.toString(2);
//     console.log(binary)
// }
// addBinary(5, 9)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Implement a function that accepts 3 integer values a, b, c. 
//The function should return true if a triangle can be built with the sides of given length and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a,b,c) {
//     let sumA = b + c > a;
//     let sumB = c + a > b;
//     let sumC = a + b > c;

//     let result = sumA && sumB && sumC ? true : false;
//     console.log(result)

// }

// isTriangle(1,2,2);
// isTriangle(7,2,2)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// function grow(x){
// let multiply = x.reduce((arr, curr) => arr * curr);
// console.log(multiply)
// }

// grow([1, 2, 3, 4])

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// function litres(time) {
//     let result = Math.floor(0.5 * time);
//     console.log(result)
//     return result;
// }

// litres(3)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Trolls are attacking your comment section!

//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//     let vowels = /A|E|I|O|U|a|e|i|o|u/g;
//     let newString = str.replace(vowels, "");
//     return newString
// }

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }

// disemvowel( "This website is for losers LOL!")
// disemvowel("No offense but,\nYour writing is among the worst I've ever read")

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
//Implement a function that determines whether a string that contains only letters is an isogram. 
//Assume the empty string is an isogram. Ignore letter case.
//Example: (Input --> Output)

//"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// function isIsogram(str){
//     let isogram = str.split("").sort().join("").match(/(.)\1+/g);
//     if(/[A-Z]/.test(str)){
//         return false
//     } else if(str === "" || isogram){
//         return true
//     } else {
//         return false
//     }

// }

// function isIsogram(str){
//     var hash = {};
//     str = str.toLowerCase();
//     for (let  i = 0; i < str.length; i++) {
//       if (hash[str[i]]) {
//         console.log(false);
//       }
//       hash[str[i]] = true;
//     }
//     console.log(false); 
// }

// isIsogram("isogram")

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//