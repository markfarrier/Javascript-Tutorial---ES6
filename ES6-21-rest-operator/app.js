// Rest Operator ...
// gathers/collects the items

// used when destructuring arrays/objects
// or when gathering the parameters in a function

// rest operator for parameters
// spread operator for arguments

//arrays
const fruit = ['apple', 'orange', 'lemon', 'banana', 'pear'];
// const [first] = fruit;
// console.log(first);

const [first, second, ...fruits] = fruit;
// will log apple, and also an array of everything after the second (the rest of the array)
console.log(first, fruits);

//objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
// const { job } = person;
// console.log(job);
const { job, ...rest } = person;
console.log(job, rest);

// below will not work rest must be last element
// const {  ...rest,job } = person;
// console.log(job, rest);

const testScores = [78, 90, 56, 43, 99, 65];

const getAverage = (name, ...scores) => {
	console.log(name);
	console.log(scores);
	let total = 0;
	for (const score of scores) {
		total += score;
	}
	console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 90, 56, 43);
getAverage(person.name, ...testScores);
