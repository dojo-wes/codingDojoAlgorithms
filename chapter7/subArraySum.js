// Page 89
// Return sum and print start and end indices of first subarray that returns sum.

function maxSubSum(arr) {
	var max = 0;
	var currMax = 0;
	var start = 0;
	var end = 0;
	var reset = 0;

	for(var i = 0; i < arr.length; i++) {
		currMax += arr[i];
		if(max < currMax) {
			max = currMax;
			end = i;
			if(reset) {
				start = reset;
			}
		}
		if(currMax < 0) {
			currMax = 0;
			reset = i + 1;
		}
	}

	console.log("start index", start, "end index", end);
	return max;
}

var array1 = [1, 2, 3, -8, 1]
console.log(maxSubSum(array1))