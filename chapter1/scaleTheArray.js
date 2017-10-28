// Page 22
// Given an array arr and a number num, multiply all values in arr by num,
// and return the changed array arr.

function scaleArr(arr, num) {
	for(var i = 0; i < arr.length; i++) {
		arr[i] *= num;
	}
	return arr;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
scaleArr(array, 2);