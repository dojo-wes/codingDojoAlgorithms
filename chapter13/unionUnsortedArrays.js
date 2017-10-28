// Page 135

function unionUnsorted(arr1, arr2) {
	// Do not alter the original arrays
	var result = [];
	// Copy first array
	for(var i = 0; i < arr1.length; i++) {
		result.push(arr1[i]);
	}
	for(var i = 0; i < arr2.length; i++) {
		result.push(arr2[i]);
	}
	return result;
}

console.log(unionUnsorted([1,2,4,5,7],[3,4,8,9]))