// default parameters, arrow function gotchas

const john = 'John';
const peter = 'Peter';

// will return undefined if called without an argument or default parameter
// function sayHi(person){

// if you add a default parameter, this can be called without an argument, and the function will use the default in lieu of this
function sayHi(person = 'Susan') {
	console.log(`Hi ${person}`);
}

// cannot invoke arrow function before it is declared, since you're assigning to a variable
// sayHello();
const sayHello = (person = 'BOB') => console.log(`Hello ${person}`);

// if you don't pass in an argument, it will use the default
sayHi();
sayHello();

// if you pass in an argument, it will take precedent over the default
sayHi(john);
sayHello(peter);
