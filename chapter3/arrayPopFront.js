// Page 38
// Given array, remove and return the value at the beginning of the array. Do this without using
// any built-in array methods except pop().

function arrayPopFront(arr) {
	var value = arr[0];
	for(var i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr.length -= 1;
	console.log(arr);
	return value;
}

arrayPopFront([5,4,3,2,1])