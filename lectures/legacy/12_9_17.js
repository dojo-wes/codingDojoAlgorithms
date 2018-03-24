// count positives
// Given an array of numbers, create a function to replace the last value with the number of positive values in the array.
// [-1, 1, 1, 1], [-1, 1, 1, 3]

var arr1 = [-1, 1, 1, 1];

function countPositive(array) {
	var posNum = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] > 0) {
			posNum = posNum + 1;
		}
	}
	array[array.length - 1] = posNum;

	return array;
}
// console.log(countPositive(arr1));

// given array of strings return array with string lengths as values.
// You are passed an array containing strings. Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array;
arr1 = ["pig", "flamingo", "badger", "elephant", "lynx"]

function stringLength(array) {
	for (var i = array.length - 1; i > 0; i--) {
		array[i] = array[i - 1].length;
	}
	return array;
}

// console.log(stringLength(arr1));


// Swap toward the center
// Given array, swap first and last, third and third-to-last, etc. Input[true, 42, "ada", 2, "pizza"] becomes ['pizza', 42, "Ada", 2, true]
// Change [1, 2, 3, 4, 5, 6] to [6, 2, 4, 3, 5, 1];

function swapTowardCenter(arr) {
	for(var i = 0; i < arr.length / 2; i += 2) {
		var temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
}

// console.log(swapTowardCenter([1, 2, 3, 4, 5, 6]));
// console.log(swapTowardCenter([1, 2, 3, 4, 5, 6, 7]));

function reversearr(arr){
    for (var i = 0; i < arr.length / 2; i++){
		// if(i > arr.length / 2) {
		// 	break;
		// }
		var temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
		// console.log(i, arr.length - 1 - i, arr, i + 1 + " times");
	}

	return arr;
}
var arr =[1,2,3,4]; // [4, 3, 2, 1]
var arr2 = [1,2,3,4,5,6,7]; // [5,4,3,2,1]

console.log(reversearr(arr));
console.log(reversearr(arr2));
