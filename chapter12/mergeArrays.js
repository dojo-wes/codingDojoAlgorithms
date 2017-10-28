

// 2 pointers, 2 arrays
// compare values at pointers
// 

function mergeArrays(arr1, arr2) {
	var result = [];
	var pointer1 = 0;
	var pointer2 = 0;

	while(pointer1 < arr1.length && pointer2 < arr2.length) {
		if(arr1[pointer1] < arr2[pointer2]) {
			result.push(arr1[pointer1]);
			pointer1++;
		} else {
			result.push(arr2[pointer2]);
			pointer2++;
		}
	}

	while(pointer1 < arr1.length) {
		result.push(arr1[pointer1]);
		pointer1++;
	}

	while(pointer2 < arr2.length) {
		result.push(arr2[pointer2]);
		pointer2++;
	}

	return result;
}

var array1 = [0,1,2,3]
var array2 = [0,1,2,3,7,8,9]
console.log(mergeArrays(array1, array2))