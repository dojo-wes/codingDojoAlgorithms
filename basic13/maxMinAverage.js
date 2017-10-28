// Page 27
// Given an array, print the max, min and average values for that array

function maxMinAvg(arr) {
	var max = arr[0];
	var min = arr[0];
	var avg = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		} else if(arr[i] < min) {
			min = arr[i];
		}
		avg += arr[i] / arr.length;
	}
	console.log("max: " + max + " min: " + min + " avg: " + avg);
}

maxMinAvg([1,2,3,4,5,6,7,1,2,3,4,5,0]);