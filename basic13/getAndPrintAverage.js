//Page 27
//Analyze an array's values and print the average

function printAvg(arr) {
	var avg = 0;
	for(var i = 0; i < arr.length; i++) {
		avg += arr[i] / arr.length;
	}
	console.log(avg);
}

printAvg([1,2,3,4]);