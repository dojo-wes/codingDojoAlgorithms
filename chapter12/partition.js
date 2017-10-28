// Page 128

function partition(arr) {
	// start pivot value at index 0
	var pivot = arr[0];
	// initialize swaps value, which determines final partition idx
	// swaps also points to where the last left value was found
	var swaps = 0;

	for(var i = 1; i < arr.length; i++) {
		// swap any index value less than pivot value with value at swap idx
		if(arr[i] < pivot) {
			// increment swaps before swapping to put to the right of last known less than pivot value
			swaps++;
			// swap if necessary, low value is put to the right of the last found low val
			var temp = arr[swaps];
			arr[swaps] = arr[i];
			arr[i] = temp;
		}
	}
	// swap pivot value with the value at the index where pivot should be
	var temp = arr[swaps];
	arr[swaps] = arr[0];
	arr[0] = temp;
	// print array for testing
	console.log(arr);
	// return index value of pivot
	return swaps;
}

var array = [6,3,8,7,1,2,4,5,9]
var array2 = [6,2,2,2,2,2,2,2,2,8,8,8]
var array3 = [6,3]
console.log(partition(array3))