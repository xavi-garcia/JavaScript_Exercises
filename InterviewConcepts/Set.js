// Create an empty set
const mySet = new Set();

// Add values to the set
mySet.add(1);
mySet.add(2);
mySet.add('hello');
mySet.add({ name: 'John' });

// Check the size of the set
console.log(mySet.size); // output: 4

// Check if a value is in the set
console.log(mySet.has(2)); // output: true

// Delete a value from the set
mySet.delete(2);

// Iterate over all the values in the set
for (let item of mySet) {
  console.log(item);
}
/*
output:
1
'hello'
{ name: 'John' }
*/

// Convert a set to an array
const myArray = [...mySet];
console.log(myArray); // output: [1, 'hello', { name: 'John' }]
