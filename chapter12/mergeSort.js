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

	arr1 = result;
	return arr1;
}

var array1 = [0,1,2,3]
var array2 = [0,1,2,3,7,8,9]
console.log(mergeArrays(array1, array2))

function mergeSort(arr) {
	if(arr.length <= 1) {
		return arr;
	}
	var mid = Math.floor(arr.length/2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid, arr.length);
	return mergeArrays(mergeSort(left), mergeSort(right));
}

var array3 = [3,1,6,7,8,9,0,5,3,4,5,7,2,34,52,457,6,8,567,8,764,34563,475,6785,67,3435,634,563,456,6844,567,45674,568,45,2,452,4352345,12]
console.log(mergeSort(array3))