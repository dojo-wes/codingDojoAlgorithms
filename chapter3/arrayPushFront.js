// Page 38
// Given array and an additional value, insert this value at the beginning of the array.
// Do this without using any built-in array methods.

function arrayPushFront(arr, value) {
	for(var i = arr.length; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = value;
	return arr;
}

arrayPushFront([5,4,3,2,1], 6);