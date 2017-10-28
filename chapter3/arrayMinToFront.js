// Page 39
// Given an array of comparable values, move the lowest element to the array's front, shifting backward any
// elements previously ahead of it. Do not otherwise change the array's order. Given [4,2,1,3,5],
// change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function arrayMinToFront(arr) {
	var min = arr[0];
	var newIdx = 0;
	for(i = 0; i < arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i];
			newIdx = i;
		}
	}
	for(i = newIdx; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = min;
	return arr;
}

arrayMinToFront([4,2,1,3,5]);