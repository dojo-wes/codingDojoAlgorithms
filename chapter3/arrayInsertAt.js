// Page 38
// Given array, index, and additional value, insert the value into array at given index. Do this without using
// built-in array methods. You can think of pushFront(arr, val) as equivalent to insertAt(arr, 0, val)

function arrayInsertAt(arr, idx, val) {
	for(var i = arr.length; i > idx; i--) {
		arr[i] = arr[i - 1];
	}
	arr[idx] = val;
	return arr;
}

arrayInsertAt([1,2,3,4,6,7,8], 4, 5)