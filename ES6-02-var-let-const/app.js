// var, let , const
// define, update, redifine
// const cannot mutate primitive type

// define
var number = 100;
// console.log(number);
// update
number = 200;
// console.log(number);
// redifine
var number = 'orange';
// console.log(number);

let amount = 100;
// console.log(amount);
amount = 200;
// console.log(amount);
// let cannot redefine the variable as a different type
// let amount = 'orange';

const total = 100;
// console.log(total);
// const cannot update value
// total = 200;
const person = { name: 'bob' };
// we can change a value within a object though, as that is a reference type
// i.e. we can change person.name but not person itself
person.name = 'john';
console.log(person.name);
