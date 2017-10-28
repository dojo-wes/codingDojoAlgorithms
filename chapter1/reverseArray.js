// Page 22
// Given array, write a function that reverses values, in-place.
// Example: reverse([3,1,6,4,2]) returns the same array, containing [2,4,6,1,3]

function reverseArr(arr) {
	var i = 0;
	var n = arr.length;
	while(i < n) {
		temp = arr[i];
		arr[i] = arr[n - 1];
		arr[n - 1] = temp;
		i++;
		n--;
	}
	return arr;
}

var array = [3,1,6,4,2];
reverseArr(array);