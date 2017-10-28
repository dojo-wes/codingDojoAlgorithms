// Page 84
// (Warm-up) Always run through some quick algorithm problems before any coding interview, to get
// yourself warmed up. How about this one: return the average value of an array of unsorted number.

function arrayAvg(arr) {
	var avg = 0;
	var len = arr.length
	for(var i = 0; i < len; i++) {
		avg += arr[i] / len;
	}
	return avg;
}

var arr1 = [2, 3, 4, 7, 5];
console.log(arrayAvg(arr1));