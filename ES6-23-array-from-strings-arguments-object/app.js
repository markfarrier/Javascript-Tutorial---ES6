// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

const udemy = 'udemy';
// below converts into an array object
console.log(Array.from(udemy));

function countTotal() {
	// arguments is a keyword that contains the arguments passed into the function
	// cannot use array methods with arguments here, as it is array-like, not an actual array
	// console.log(arguments);
	// will sum all arguments, starting with an initial value of zero
	let total = Array.from(arguments).reduce(
		(total, currNum) => (total += currNum),
		0
	);
	console.log(total);
}

countTotal(67, 89, 54, 100);
