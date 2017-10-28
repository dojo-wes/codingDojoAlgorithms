// Page 27
// Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr, y) {
	var count = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > y) {
			count++;
		}
	}
	console.log(count);
}

greaterThanY([1,2,3,6,6,6,6,2], 3);