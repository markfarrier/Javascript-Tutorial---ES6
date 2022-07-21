// Template Strings/Literals
// `` backticks above tab key left of 1 key
// tagged template

const author = 'Some Author';
const statement = 'Some Statement';

// manual method without tagged template literal:
// const quote = highlight`Here is the <strong class="blue">${statement}</strong> by <strong class="blue">${author}</strong> and it could not be more true`;

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`;
console.log(quote);

// if you know how many variables you have
// function highlight(text, arg1, arg2){

// if you don't know how many variables you have
// text array is always going to have one more value in the array than the vars
// even if the variable(s) is at the end, the text will include an empty string at the end
function highlight(text, ...vars) {
	let awesomeText = text.map((item, index) => {
		// needs to have the OR '' because item has more items in the array
		// therefore, the final iteration of the map will return undefined
		return `${item} <strong class="blue">${vars[index] || ''}</strong>`;
	});
	return awesomeText.join('');
}

const result = document.getElementById('result');
result.innerHTML = quote;
