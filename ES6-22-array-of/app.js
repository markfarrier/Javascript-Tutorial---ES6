// Array.from and Array.of - NOT ON THE PROTOTYPE
// Array.from
// Array.of
// of creates a new Array instance from a variable number of arguments.

const example = ['one', 'two', 'three'];
console.log(example);
// will return the array map function
console.log(example.map);
// the following two aren't array methods in the prototype so will return undefined rather than a function
console.log(example.from);
console.log(example.of);

// everything in the arguments will be put into the new friends array
const friends = Array.of('john', 2, true);
console.log(friends);
