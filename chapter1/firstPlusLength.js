//Page 20
//Given an array, return the sum of the first value in the array, plus the array's length.
//What happens if the array's first value is not a number, but a string (like "what?")
//or a boolean (like false)?

function firstPlusLength(arr) {
	return arr[0] + arr.length;
}

var arr1 = [2, "what?", 4, 6, 2, "hmmm"];
var arr2 = ["what?", 2, 3, 4, 5, 1, 3];
var arr3 = [false, 2, "what?", true, 4];

// firstPlusLength(arr1);
// firstPlusLength(arr2);
firstPlusLength(arr3);