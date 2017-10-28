//Page 20
//Create a function that accepts a number as an input. Return a new array that counts down by one,
//from the number (as array's 'zero'th element) down to 0 (as the last element). How long is the array?

function countdown(num) {
	var arr = [];
	for (var i = num; i >= 0; i--) {
		//arr.push(i);
		arr[arr.length] = i;
	}
	console.log(arr.length);
	return arr;
}

//store the returned value somewhere for reuse.
var info = countdown(11);
console.log(info);