// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

console.log(Math.max(4, 5, 6, 7, 88));

const numbers = [23, 45, 66, 88, 2345];

// will return NaN, as you can't pass an array into Math.max
console.log(Math.max(numbers));

// spread operator will split array into individual items as parameters in Math.max
console.log(Math.max(...numbers));

const john = ['john', 'sanders'];

const sayHello = (name, lastName) => {
	console.log(`Hello ${name} ${lastName}`);
};

// doing it manually
sayHello(john[0], john[1]);

// using spread operator to speed things up
sayHello(...john);
