// Page 22
// Given array of numbers, create function to return a new array where each value in the original
// has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing the original.

function double(arr) {
	var newArr = [];
	var i = 0;
	while(i < arr.length) {
		newArr.push(arr[i] * 2);
		i++;
	}
	return newArr;
}

var array = [1,2,3];
console.log(array); //check to see if array is unchanged per the instructions.
//running console.log and double in opposite order result in undefined "return".
double(array);