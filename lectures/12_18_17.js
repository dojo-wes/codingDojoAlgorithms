function reverseArr(arr) {
	// subtracting by .5 to remove extra operation
	for(var i = 0; i < arr.length / 2 - .5; i++) {
		var temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
}

var test = [1, 2, 3, 4, 5];
var test2 = [1, 2, 3, 4, 5, 6];
// console.log(reverseArr(test));
// console.log(reverseArr(test2));

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr ’s values to th e right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, s o that no data is lost. Operate in-place: given ([1,2,3],1) , change the array to [3,1,2] . Don’ t use built-in functions . Second: allow negative shiftBy (shift L, not R) . Third: minimize memory usage. With no new array, handle arrays/ shiftBy s in the millions . Fourth: minimize the touches of each element .

function rotateArr(arr, shiftBy) {
	if(shiftBy < 0) {
		shiftBy = arr.length + shiftBy;
	}
	shiftBy = shiftBy % arr.length;
	while(shiftBy) {
		var temp = arr[arr.length - 1];
		for(var i = arr.length - 1; i > 0; i--) {
			arr[i] = arr[i - 1];
		}
		arr[0] = temp;
		shiftBy--;
	}
}
var testArr = [1, 2, 3];
var testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rotateArr(testArr2, 4); 
// rotateArr(testArr2, 6); 