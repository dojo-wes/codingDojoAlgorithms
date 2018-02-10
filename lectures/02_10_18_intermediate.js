// Array: Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// Second: solve this without using any nested loops.

function removeAt(arr, indx) {
	/* save value to be returned */
	var val = arr[indx];

	for (var i = indx; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	// console.log(val, arr);
	arr.length = arr.length - 1;
	// console.log(val, arr);
	return val;
}

function removeDuplicates(arr) {
	for (var i = 1; i < arr.length; i++) {
		// console.log("i=", i, "arr.length=", arr.length, "arr=", arr);
		if (arr[i] == arr[i - 1]) {
			removeAt(arr, i);
			i = i - 1;
		}
	}
}
var sorted_array = [33, 33, 44, 55, 55, 55, 66, 66];

function removeDuplicates2(arr) {
	var popNum = 0;
	var curr = 0;
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] === arr[curr]) {
			popNum += 1;
		} else {
			curr += 1;
			arr[curr] = arr[i];
		}
	}
	console.log(arr, 'popNum:', popNum);
	arr.length -= popNum;
	console.log(arr);
	return arr;
}

// removeDuplicates2(sorted_array);

// Array: Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr ’s values to th e right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, s o that no data is lost. Operate in-place: given ([1,2,3],1) , change the array to [3,1,2] . Don’ t use built-in functions . Second: allow negative shiftBy (shift L, not R) . Third: minimize memory usage. With no new array, handle arrays/ shiftBy s in the millions . Fourth: minimize the touches of each element .

function rotateArr(arr, shiftBy) {
	shiftBy %= arr.length;
	if(shiftBy < 0) {
		shiftBy = arr.length + shiftBy;
	}
	for(var i = 0; i < shiftBy; i++) {
		for(var j = arr.length - 1; j > 0; j--) {
			var temp = arr[j];
			arr[j] = arr[j - 1];
			arr[j - 1] = temp;
		}
	}
	console.log(arr);
	return arr;
}

// rotateArr([1, 2, 3, 4, 5], -2000000001); // 4, 5, 1, 2, 3

var string = 'hello world';
string[0] = 'm';
string = '!' + string;
console.log(string);