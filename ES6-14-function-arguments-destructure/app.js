// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// As Function Arguments

const bob = {
	first: 'bob',
	last: 'sanders',
	city: 'chicago',
	siblings: {
		sister: 'jane',
	},
};

// can do it this way
function printPerson(person) {
	const { first, last, city } = person;
	console.log(first, last, city);
}

// or can destructure within the parameter, using parentheses
// common practice with React
function printPerson({ first, last, city }) {
	console.log(first, last, city);
}

printPerson(bob);
