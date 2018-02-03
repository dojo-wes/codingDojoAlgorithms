var myArr = [2, 3, 4];

function pushFront(arr, val) {
	var newArray = [];
	newArray[0] = val;
	for(var i = 0; i < arr.length; i++) {
		newArray.push(arr[i]);
	}
	console.log(newArray);
	arr = newArray;
	return arr;
}

// myArr = pushFront(myArr, 1);
// console.log(myArr);

function pushFront2(arr, val) {
	for(var i = arr.length - 1; i >= 0; i--) {
		arr[i + 1] = arr[i];
	}
	arr[0] = val;
	console.log(arr);
	return arr;
}

// pushFront2(myArr, 1);

function popFront(arr) {
	// save arr[0]
	// move each element to the left
	var value = arr[0];
	for(var i = 0; i < arr.length - 1; i++) {
		arr[i] = arr[i + 1];
	}
	// arr.pop();
	arr.length--;
	console.log(arr, value);
	return value;
}

// var test = [1, 2, 3, 4];
// popFront(test);

// Swap Toward the Center
// Given array, swap first and last, third and third-to last,
// etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2, true].
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapTowardCenter(arr) {
	var first = 0;
	while(first < arr.length - 1 - first) {
		var temp = arr[first];
		arr[first] = arr[arr.length - 1 - first];
		arr[arr.length - 1 - first] = temp;
		first += 2;
	}
	console.log(arr);
	return arr;
}

var test1 = [1, 2, 3, 4, 5, 6];
var test2 = [true, 42, "Ada", 2, "pizza"];
// swapTowardCenter(test1);
// swapTowardCenter(test2);

function swapTowardCenter2(arr) {
	for(var i = 0; i < arr.length / 2; i += 2) {
		var temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp; 
	}
	console.log(arr);
	return arr;
}

swapTowardCenter2(test1);
swapTowardCenter2(test2);