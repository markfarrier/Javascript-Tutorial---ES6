// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Objects

const bob = {
	first: 'bob',
	last: 'sanders',
	city: 'chicago',
	siblings: {
		sister: 'jane',
	},
};

// const { first, last, city } = bob;
// console.log(first, last, city);

// unlike arrays, property name needs to match - zip will return undefined
// const { first, last, city, zip } = bob;
// console.log(first, last, city, zip);

// can rename the property
// const { first: firstName, last, city } = bob;

// will return an error as "first" is undefined here
// console.log(first, last, city);

// won't return an error as you're using the correct variable name firstName
// console.log(firstName, last, city);

// how to access an object within the object being destructured - use curlybraces
const {
	first: firstName,
	last,
	city,
	zip,
	siblings: { sister: favoriteSibling },
} = bob;
console.log(firstName, last, city, zip, favoriteSibling);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);
