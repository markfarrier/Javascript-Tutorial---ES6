// Arrow Functions or Fat Arrow Functions
// no name, always expression, assign to variable (unless it's a callback function)
// no function keyword
// treats "this" differently

// parameters and return statement
//no parameters

// function sayHi() {
//   console.log("hello");
// }
// sayHi();
// const hello = function(name) {
//   console.log(`Hello ${name}`);
// };
// hello("bob");
// one parameter
// function triple(value) {
//   return value * 3;
// }

// if you only have one line, you can omit curly brace and/or return statement
const sayHi = () => console.log('hello');
sayHi();

// if only 1 parameter, you can omit the parentheses (prettier is autoformatting it to add these parentheses back in however)
// implicitly returns the value * 2 when only 1 line
const double = (value) => value * 2;
const num = double(4);
console.log(num);

// two parameters and more than one line
// needs a return statement if more than 1 line (if no return it will return undefined)
// needs the parentheses if more than 1 parameter
const multiply = (num1, num2) => {
	const result = num1 * num2;
	// more code here
	return result;
};
const sum = multiply(4, 6);
console.log(sum);

// return object
// if returning an object, you need to wrap the curly braces in parentheses
// otherwise javascript will be confused and think it's a function block rather than an object
const object = () => ({ name: 'bob', age: 25 });
const person = object();
console.log(person);

// arrow functions as callback functions
// these examples use anonymous functions but you could equally define the function and pass it in as a reference
const numbers = [1, 2, 3, 4, 5, 6];
// const big = numbers.filter((number) => number > 2);
// if you want to console log the index it will need curley brace (and return
const big = numbers.filter((number, index) => {
	console.log(index);
	return number > 2;
});
console.log(big);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => console.log('you clicked me'));
