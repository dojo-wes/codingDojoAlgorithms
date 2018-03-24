function sigma(num) {
	var sum = 0;
	for(var i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}

// console.log(sigma(5)) // 15
// console.log(sigma(3)) // 6

function factorial(num) {
	var fact = 1;
	for (var i = 1; i <= num; i++) {
		fact = fact * i;
	}
	return fact;
}
console.log(factorial(5));

function pushFront(arr, val) {
	for(var i = arr.length - 1; i >= 0; i--) {
		// arr[5] = arr[4];
		arr[i + 1] = arr[i];
	}
	arr[0] = val;
	console.log(arr);
	return arr;
}

var array = [1, 2, 3, 4, 5];
// console.log(array);
// pushFront(array, 0);

