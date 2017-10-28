// complete a recursive sort using the partition function

function partition(arr, start, end) {
	// start pivot value at start
	var pivot = arr[start];
	// initialize swaps value, which determines final partition idx
	// swaps also points to where the last left value was found
	var swaps = start;

	//right idx inclusive
	for(var i = start + 1; i <= end; i++) {
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
	arr[swaps] = arr[start];
	arr[start] = temp;
	// print array for testing
	// console.log(arr);
	// return index value of pivot
	return swaps;
}
// test partition
// var array = [6,3,8,7,1,2,4,5,9]
// var array2 = [6,2,2,2,2,2,2,2,2,8,8,8]
// var array3 = [6,3]
// console.log(partition(array, 0, 8))

function quickSort(arr) {
	function recurse(start, end) {
		// console.log("recursing", "arr", arr, "start", start, "end", end)
		if((end - start) < 1) {
			// console.log("breaking")
			return;
		} else {
			var partIdx = partition(arr, start, end);
			recurse(start, partIdx - 1);
			recurse(partIdx + 1, end);
		}
	}
	recurse(0, arr.length);
	return arr;
}
// var array = Array.apply(null, Array(20000)).map(function() { return Math.random() * 100})
var array = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
console.log(quickSort(array))