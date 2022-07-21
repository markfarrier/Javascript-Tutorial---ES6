// new string methods
// startsWith(), endsWith(), includes(),repeat()

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-DOE';

// starts width
// returns true
console.log(person.startsWith('Pet'));
// returns false because it's case sensistive
console.log(person.startsWith('peter'));

// ends width
// second argument is the index where it's starting the "starts with"
// returns true as the string starting at index 6 starts with EMP
console.log(employee.startsWith('EMP', 6));
// returns true as the string ends with DOE
console.log(manager.endsWith('DOE'));
// returns true as the string ending at index 9 ends with MAN
console.log(manager.endsWith('MAN', 9));

// includes
// returns true as the string contains "MAN"
console.log(manager.includes('MAN'));
// returns false as it's case sensitive.  String includes "MAN", but not "mAN"
console.log(manager.includes('mAN'));

const multiplyPeople = (person, amount = 5) => person.repeat(amount);

// repeat
const people = multiplyPeople(person, 10);
// will log person joined together 10 times
console.log(people);

// if no argument is used, it will use the default which is 5
// const people = multiplyPeople(person);
// console.log(people);
