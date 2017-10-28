// Page 22
// Given array, swap first and last, third and third-to-last, etc. Input[true, 42, "Ada", 2, "pizza"]
// becomes ["pizza", 42, "Ada", 2, true];

function swapTowardCenter(arr) {
	for(var i = 0; i < arr.length / 2; i += 2) {
		var temp = arr[i];
		arr[i] = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = temp;
	}
	return arr;
}

var array = [1,2,3,4,5,6];
swapTowardCenter(array);