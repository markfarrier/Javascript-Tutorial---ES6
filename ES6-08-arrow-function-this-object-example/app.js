// Arrow Functions or Fat Arrow Functions
// 'this' keyword
// reg function : 'this' refers parent, left of the dot
// arrow function : 'this' refers to its current surrounding scope (in the following case, it is the global scope)

const bob = {
	firstName: 'bob',
	lastName: 'smith',
	sayName: function () {
		// using a regular function, "this" will reference bob, as it's the object that called sayName
		console.log(this);

		// using a regular function here will reference the window object, as that's where the setTimeout is defined
		// setTimeout(function () {
		// 	console.log(this);
		//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
		// }, 2000);

		// could fix by assigning this to a variable to force where this points to
		// const self = this;
		// setTimeout(function () {
		// 	console.log(this);
		// 	console.log(self);
		// 	console.log(`Hello, my name is ${self.firstName} ${self.lastName}`);
		// }, 2000);

		// or could use arrow function
		// here, this will refer to the bob, as that is the arrow function's surrounding scope (the bob object)
		setTimeout(() => {
			console.log(this);
			console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
		}, 2000);
	},
};

const anna = {
	firstName: 'anna',
	lastName: 'sanders',
	// using an arrow function, "this" will reference the Window object, as the scope is global in this case, therefore it will point to the window
	sayName: () => {
		console.log(this);
		console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
	},
};

bob.sayName();
// anna.sayName();
