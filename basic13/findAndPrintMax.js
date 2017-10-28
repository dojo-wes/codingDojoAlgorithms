// Page 27
// Given an array, find and print its largest element.

function findAndPrintMax(arr) {
	var max = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	console.log(max);
}

findAndPrintMax([1, 2, 3, 4, 5]);