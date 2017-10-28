// Page 40
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the
// same lenth, with existing elements moved to other indices so that the order of elements is reversed.
// Working 'in-place' means that you cannot use a second array - move values within the array that you
// are given. As always, do not use built-in array functions such as splice().

function arrayReverse(arr) {
	for(var i = 0; i < (arr.length - 1) / 2; i++) {
		var temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
}

arrayReverse([1,2,3,4,5,6,7]);