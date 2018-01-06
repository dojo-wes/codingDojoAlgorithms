function pushFront(arr, value) {
	for(var i = arr.length - 1; i >= 0; i--) {
		// arr[i] = arr[i - 1];
		arr[i + 1] = arr[i];
	}
	arr[0] = value;
	console.log(arr);
	return arr;
}

var test = [2, 3, 4, 5];
// pushFront(test, 1); // [1, 2, 3, 4, 5]

var myVar = true;
while(myVar) {
	myVar = false;
	console.log('in the while loop!');
}