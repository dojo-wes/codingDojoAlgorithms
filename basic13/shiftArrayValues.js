//Page 27
//Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.

function shiftArrayValues(arr) {
	for(var i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr[arr.length - 1] = 0;
	return arr;
}

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
shiftArrayValues(array);