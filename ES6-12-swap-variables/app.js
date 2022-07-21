// Destructuring Swap Variables
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

// have to use let, not const
let first = 'bob';
let second = 'john';

// // temp = 'john'
// let temp = second;

// // second = 'bob'
// // first remains 'bob'
// second = first;

// // first = 'john'
// first = temp;

[second, first] = [first, second];

console.log(first, second);
