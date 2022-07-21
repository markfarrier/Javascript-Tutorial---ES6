// Arrow Functions or Fat Arrow Functions
// 'this' keyword
// reg function : 'this' refers parent, left of the dot
// arrow function : 'this' refers to its current surrounding scope

const btn = document.querySelector('.btn');

// using a regular function, the event listener will work, as this refers to the parent, which is the button html
// btn.addEventListener('click', function () {
//  console.log(this);
// 	this.style.color = 'black';
// });

// using an arrow function, the event listener will not work, as this refers to the surrounding scope, which will be the window in the case of addEventListener
// btn.addEventListener('click', () => {
// 	console.log(this);
// 	this.style.color = 'black';
// });

// within the setTimeout here, the anonymous function will refer to its parent, which in this case will be the global scope
// therefore, the "this" within the callback function will refer to the global scope
// btn.addEventListener('click', function () {
// 	console.log(this);
// 	setTimeout(function () {
// 		this.style.color = 'black';
// 	}, 2000);
// });

// however, the following will work, as in the following case, the surrounding scope will be the button html, being that it is called within btn
btn.addEventListener('click', function () {
	console.log(this);
	setTimeout(() => {
		this.style.color = 'black';
	}, 2000);
});
