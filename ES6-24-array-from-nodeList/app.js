// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

const p = document.querySelectorAll('p');
const result = document.getElementById('result');
const second = document.getElementById('second');

console.log(p);

let newText = Array.from(p);
console.log(newText);

newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');
console.log(newText);
result.innerHTML = newText;

// quicker method
// first argument is the array, second is the mapping callback function that mutates the array
const text = Array.from(document.querySelectorAll('p'), (item) => {
	// return 'hello world';
	return `<span>${item.textContent}</span>`;
}).join(' ');
console.log(text);
second.innerHTML = text;

// not sure why the below line was in the project code
// console.log(job, rest);
