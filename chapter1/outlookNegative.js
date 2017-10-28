// Page 22
// Given an array, create and return a new one containing all the values of the provided array,
// made negative (not simply multiplied by -1). Given [1,-3,5] return [-1,-3,-5].

function negative(arr) {
	var newArr = [];
	var i = 0;
	while(i < arr.length) {
		newArr.push(-Math.abs(arr[i]));
		i++;
	}
	return newArr;
}

var array = [1, -3, 5];
negative(array);