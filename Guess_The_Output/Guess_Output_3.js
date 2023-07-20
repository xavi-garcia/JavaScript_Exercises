//-----------------------------------------------------------------------------------------------
//console.log(String.raw`HelloTwitter\nworld`)
/* Explanation!
What String.raw actually does is taking a template literal, processing all substitutions (${variable}, e.g.), but ignoring well-known escape-sequences.

**The following will be printed above: HelloTwitter\nworld**

\n is a well-known escape-sequence, like \t is, e.g.

Those will simply be ignored and put into the resulting string, as they are.

Here an example of how String.raw works when you also include substitutions: */
//-----------------------------------------------------------------------------------------------
// const isTrue = true == [];
// const isFalse = true == ![];

// console.log(isTrue + isFalse);

/* Explanation!
Let's break this up:
The comparison performed is the abstract comparison operation,
which uses type coercion under the hood, when necessary.

As the first parameter is a boolean, the following rule applies:
"If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y."
And in the next round, the next rule applies,
"If Type(y) is Boolean, return the result of the comparison x == ToNumber(y)."

Which then boils down to:
Number(true) == Number([])
=> 1 == 0

const isTrue = true == []; // => false

Here, two booleans are present.
The right side gets converted through the unary negation, and then negated.
An empty array is truthy, converting and negating it yields false.
true == false

const isFalse = true == ![]; // => false

This now evaluates to: false + false
which is coered to:
Number(false) + Number(false)
=> 0 + 0

console.log(isTrue + isFalse); // => prints 0 */

//-----------------------------------------------------------------------------------------------
// let array = [1, 2, 3];
// array[6] = 9;
// console.log(array[5]);

/* Explanation!
The answer is undefined.

This quiz starts with an array of length 3, containing 3 numbers.

By not using Array.prototype.push and then assigning a value to a position in the array, that is out of the bounds of the original array, the array is extended automatically by the runtime while also increasing the length property.

But this leads to the interesting behavior, that a lot of holes are created within the array.

After the expression array[6] = 9; the array looks as follows:

//  0  1  2     3           4          5      6     <- indices 
   [1, 2, 3, undefined, undefined, undefined, 9]

And this is why, when accessing array[5] undefined is returned. */


//-----------------------------------------------------------------------------------------------
console.log(3 > 2 > 1);

//-----------------------------------------------------------------------------------------------
// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

/*Explanation!
The answer is "banana".

What actually happens here is the following:

The plus operator is defined for numbers and strings and as soon as a string is present on either the left or right side, a string concatenation is perfomed.

If we follow the execution path, this is what happens:

// 1st step 
'b' + 'a' -> 'ba' 
// 2nd step 
'ba' + + 'a' // wait a second!

There are two plus operators in this expression. But one of those is actually a prefix-operator, and not a classical plus.
What it does is converting the right-side argument to a number, but converting 'a' to a number will actually yield NaN!
Let's continue with following the execution path:

// 1st step 
'b' + 'a' -> 'ba' 
// 2nd step 
'ba' + + 'a' -> 'ba' + NaN -> 'baNaN'
// 3rd step 
'baNaN' + 'a' -> 'baNaNa'
// 4th step 
'baNaNa'.toLowerCase() -> 'banana'*/

//-----------------------------------------------------------------------------------------------


//PROBLEM 9

// console.log(018 - 015); 
/* Explanation!
This will actually result in 5 but this is pretty strange, isn't it?

Please note, that this example will only work in lax mode, and not in strict mode, and we will come to the explanation soon enough.

In earlier versions of JavaScript, a leading 0 on a number marked an octal number.

Octal numbers are numbers with a base of 8 (instead 10 like with decimal numbers).

This means that numbers from 0 to 7 are valid digits.

In our case, 018 can't actually be a octal number, can it?

Well it can't and the runtime knows this, which is why it treats 018 as 18 although the right side contains a perfectly valid octal number 015 which is 13 in decimal.

And the runtime will perform the calculation exactly like this, which results in:*/

//------------------------------------------------------------------------------------------------

//PROBLEM 8

//console.log(1 +  "2" + "2"); // 122

//------------------------------------------------------------------------------------------------

//PROBLEM 9

//console.log(0.1 + 0.2 == 0.3);

/* Explanation!
The answer is false.

This is not a JavaScript quirk but actually based on floating point arithmetic.
Some decimal numbers simply can't be represented accurately by computers and some decimal numbers can't be added up accurately.
This is the case in this situation.

0.1 + 0.2 -> 0.30000000000000004

And 0.30000000000000004 is never equal to 0.3. */

//---------------------------------------------------------------------------------------------------------


//PROBLEM 10

// const numbers = [33, 2, 8]; 
// numbers.sort();
// console.log(numbers[1]);

/* Explanation!
This returns 33, but why is that?

JavaScript is a dynamically typed language, which means that all standard library functionality must, at some point, decide how to work for most, if not all, use-cases.

Always keep in mind that the following array is valid:

const array = ["1", true, 55, 1.421, "foo", {}];

Array.prototype.sort now needs to make a decision on how to handle such scenarios, and the solution is pretty straight-forward:

Convert all values to their string representation (because every value in JavaScript can always be converted to a string!), and then sort them in lexicographic order.

Which basically makes sort see the array as this:

const intermediate = ["33", "2", "8"];

And in lexicographic order, no matter how many characters a string has, comparison starts at position 0, and "3" comes before "8".

And in the end, the result is this:

["2", "33", "8"];*/ 

//----------------------------------------------------------------------------------------------------------

//PROBLEM 11
//console.log(typeof typeof 1)

/* Explanation!
This actually returns "string".

This expression is evaluated from right to left.

The first sub-expression evaluated actually is typeof 1 which will return "number".

Only after that the next sub-expression is evaluated which now is typeof "number" which returns "string".

Close*/

