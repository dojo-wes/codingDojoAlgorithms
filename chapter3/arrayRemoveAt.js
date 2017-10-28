// Page 38
// given array and an index into array, remove and return the array value at that index. Do this without using built-in
// array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr, 0).

function arrayRemoveAt(arr, idx) {
	var value = arr[idx];
	for(var i = idx; i < arr.length; i++) {
		arr[i] = arr [i + 1];
	}
	arr.length -= 1;
	console.log(arr);
	return value;
}

arrayRemoveAt([5,4,3,3,2,1], 2)