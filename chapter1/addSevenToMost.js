// Page 22
// Build function that accepts array. Return a new array with all values except first,
// adding 7 to each. Do not alter the original array.

function add7ToMost(arr) {
	var newArr = []
	for(var i = 1; i < arr.length; i++) {
		newArr.push(arr[i] + 7);
	}
	return newArr;
}

var array = [2,6,8,0,12,15,17];
add7ToMost(array);