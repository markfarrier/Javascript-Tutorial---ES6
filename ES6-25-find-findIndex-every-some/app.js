// find - gets specific item in an array (unlike filter it will just return a specific item, not a new array)
// findIndex - gets the index of the item being searched for
// every - returns true or false based on whether or not every item in the array matches the search criteria
// some - returns true or false based on whether or not at least one item matches the search criteria

const people = [
	{ id: 1, name: 'john' },
	{ id: 2, name: 'peter' },
	{ id: 3, name: 'anna' },
];

// loops over people array and returns the object whose property name value is equal to 'anna'
// will return an array
// const anna = people.filter((person) => person.name === 'anna');
// console.log(anna);
// console.log(anna[0].name);
// console.log(anna[0].id);

// using find instead
// will return just the object
const anna = people.find((person) => person.name === 'anna');
console.log(anna);

const person = people.findIndex((item) => item.id === 3);
console.log(person);
// how this index might be used
// gets all people up to the found person
const newPeople = people.slice(0, person);
console.log(newPeople);

const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];

// will be false because one of the grades is a C, and thus will fail the "grade !== C" condition
// const allGoodGrades = grades.every((grade) => grade !== 'C');
// console.log(allGoodGrades);

// if you use goodGrades instead, it will return true, as there are no C's in goodGrades
const allGoodGrades = goodGrades.every((grade) => grade !== 'C');
console.log(allGoodGrades);

// will return true because there's at least one grade which meets the condition "grade === 'C'"
// const oneBadGrade = grades.some((grade) => grade === 'C');
// console.log(oneBadGrade);

// will return false because there are no grades in goodGrades which meet the condition "grade === 'C'"
const oneBadGrade = goodGrades.some((grade) => grade === 'C');
console.log(oneBadGrade);
