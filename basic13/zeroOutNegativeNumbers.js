// Page 27
// Return the given array, after setting any negative values to zero.

function zeroOutNeg(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] < 0) {
			arr[i] = 0;
		}
	}
	return arr;
}

zeroOutNeg([-1, 2, 1, -2, -3, -2]);