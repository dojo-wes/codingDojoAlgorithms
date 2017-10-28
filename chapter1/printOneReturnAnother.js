// Page 22
// Buld a function that takes array of numbers.
// The function should print second-to-last value in the array and return first odd value in the array.

function prtOneRetAnother(arr) {
	console.log(arr[array.length - 2]);
	var i = 0;
	while(arr[i] % 2 != 1) {
		// console.log(i);
		i++;
	}
	return arr[i];
}

var array = [2, 4, 6, 3, 5, 1, 4, 5];
prtOneRetAnother(array);