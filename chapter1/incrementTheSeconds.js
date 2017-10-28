// Page 22
// Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd
// (arr[1], [3], [5], etc). Afterward, console.log each array value and return arr.

function incrementSecond(arr) {
	for(var i = 1; i < arr.length; i += 2) {
		arr[i]++;
	}
	console.log(arr);
	return arr;
}

var array = [1,1,3,3,5,5,7,7,9,9];
incrementSecond(array);

//check for odd index with modulo for more complete solution to problem

function incrementSecond2(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(i % 2 === 1) {
			arr[i]++;
		}
	console.log(arr[i]);
	}
	return arr;
}

var array = [1,1,3,3,5,5,7,7,9,9];
incrementSecond2(array);