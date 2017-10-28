// Page 22
// Create a function that takes array of numbers. The function should print the lowest value in the array
// and return the highest value in the array.

function prtLoRetHi(arr) {
	var min = arr[0];
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i];
		} else if(arr[i] > max) {
			max = arr[i];
		}	
	}
	console.log(min);
	return max;
}

var array = [100, 1, 20, 14, 11, 22, 3000000, -40, 12, 87, 45];
prtLoRetHi(array);