// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const headings = document.querySelectorAll('h1');
const result = document.getElementById('result');

// cannot do this as headings is not an array
// console.log(headings.map((item) => console.log(item)));

// convert to array using the spread operator
const text = [...headings]
	.map((item) => `<span>${item.textContent}</span>`)
	.join('');
console.log(text);

result.innerHTML = text;
