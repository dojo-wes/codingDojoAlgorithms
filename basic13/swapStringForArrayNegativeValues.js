// Page 27
// Given an array of numbers, replace any negative values with the string 'Dojo'

function swapNegString(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] < 0) {
			arr[i] = "Dojo";
		}
	}
	return arr;
}

swapNegString([-1, 2, 3, -2, -2, 3, 4, -2]);