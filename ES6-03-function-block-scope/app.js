// var, let , const
// let, const - blocked scoped {} - anything within {}
// var - function scoped

// locally scoped let variable doesn't change globally scoped let variable
// locally scoped variables cannot be accessed in the global or parent

// global scope

var amount = 100;

// console.log(amount);
// let amount = 100;
console.log(amount);

function greet() {
	// local scope
	var random = 'some random value';
	console.log(`hello there ${amount} ${random}`);
}
// console.log(random);

// greet();

// var total = 1000;
let total = 1000;
let test = true;

if (test) {
	// local scope
	let total = 'oranges and onions';
	let value = 'some random value';
	console.log('hello there');
}

// console.log(total);
// console.log(value);

// these locally scoped variables below won't change the global scoped variable logged at the very end of the js file
{
	let total = 100;
	console.log(total);
}
{
	let total = 100;
	console.log(total);
}

console.log(total);
