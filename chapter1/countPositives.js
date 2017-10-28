// Page 22
// Given array of numbers, create function to replace last value with number of positive values.
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3].

function countPositives(arr) {
	var i = 0;
	var count = 0;
	while(i < arr.length) {
		if(arr[i] > 0) {
			count++;
			i++;
		} else {
			i++;
		}
	}
	arr[arr.length - 1] = count;
	return arr;
}

var array = [-1,1,1,1];
countPositives(array);