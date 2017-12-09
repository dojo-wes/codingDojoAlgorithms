function insert(arr, index_val, insert_val) {
	for (var i = arr.length - 1; i >= index_val; i--) {
		arr[i + 1] = arr[i];
	}
	arr[index_val] = insert_val;
	console.log(arr);
	return arr;
}
// insert([2,4,'help'],6,'ash')
// insert([2, 4, "help", "hello", 5, 22], 5, "ash"); // [2, 4, "ash", "help", "hello", 5, 22]

// given an array, remove and return 
function popFront(array){
	var value = array[0];
    for(var i = 0; i < array.length - 1; i++){
		array[i] = array[i + 1];
	}
	// array.pop();
	array.length--;
	console.log(array);
	return value;
}
// popFront([1,2,'bokb']);

var myArr = [1,1,2,3,4,5];
// console.log(popFront(myArr));
// console.log(myArr);
// var popped = myArr.pop();
// console.log(popped);

function pushFront(arr, val) {
	for (var i = arr.length - 1; i >= 0; i--) {
		arr[i + 1] = arr[i];
	}
	arr[0] = val;
	console.log(arr);
	return arr;
}
// var testArr1 = [1, 2, 3, 4, 5];
// pushFront(testArr1, 09);

function removeAt(arr, idx) {
	var result = arr[idx];
	for(var i = idx; i < arr.length - 1; i++) {
		console.log("i:", i);
		arr[i] = arr[i + 1];
	}
	// arr.pop();
	arr.length--;
	console.log(arr);
	return result;
}

var testArr = [0,1,2,3,4];
removeAt(testArr, 2);