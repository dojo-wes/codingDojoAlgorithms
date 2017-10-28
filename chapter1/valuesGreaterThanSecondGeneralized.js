//Page 20
//Write a function that accepts any array and returns a new array with the array values that are greater
//than its 2nd value. Print how many values this is.
//What will you do if the array is only one element long?

function greaterThanSecondGen(arr) {
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[1]) {
			newArr.push(arr[i]);
		}
	}
	console.log(newArr.length);
	return newArr;
}

var arr1 = [2,1,3,4,5,6,7,8,9,10];
greaterThanSecondGen(arr1);

//if the array is one element long

function greaterThanSecondGen2(arr) {
	if(arr.length > 1) { //can also do arr.length < 2 and return false with no else statement.
		var newArr = [];
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] > arr[1]) {
				newArr.push(arr[i]);
			}
		}
		console.log(newArr.length);
		return newArr;
	} else {
		console.log("Way to go dumbass, you tried to pass an array with only one value.")
	}
}

var arr2 = [10];
var arr3 = [10, 11, 12, 13, 14];
greaterThanSecondGen2(arr2);
greaterThanSecondGen2(arr3);