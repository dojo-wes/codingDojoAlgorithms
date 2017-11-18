function reverseArr(arr) {
	var temp = arr[0];
	for (i = 0; i < arr.length / 2; i++) {
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
		temp = arr[i + 1];
	}
	console.log(arr);
	return arr;
}
var myArr = [0, 45, 9, 0, 4, 11, 3, 8];
// reverseArr([1, 2, 3, 4]);
// console.log(myArr);
// reverseArr(myArr);
// console.log(myArr);

//Add Seven To Most
// Build a funciton that acccepts Array. Return a new array with all values except first, adding 7 to each. Do not alter the original array

function addSevenToMost(arr) {
	var result = [];
	for(var i = 1; i < arr.length; i++) {
		// arr[i] = arr[i] + 7;
		// var temp = arr[i] + 7;
		result.push(arr[i] + 7);
	}
	return result;	
}

var array1 = [0, 1, 2, 3, 4, 5];
// console.log(addSevenToMost(array1));
// console.log(array1);

// Always Hungry
// Create a function that accepts an array and prints "yummy" each time one of its values is equal to "food". If no array elements are "food", print "I'm hungry" once.

function alwaysHungry(arr) {
	var arrayHasFood = false;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === "food") {
			console.log("yummy");
			arrayHasFood = true;
		}
		// console.log(arrayHasFood);
	}
	// console.log("I'm hungry");
	if(arrayHasFood === false) {
		console.log("I'm hungry");
	}
}

var foodArr = ["thing", 3, 6, "food", "food"] // yummy x2
var foodArr2 = [1, 2, 3, 4, 5] // "I'm hungry" x1
console.log("first call", "____________________________");
alwaysHungry(foodArr);
console.log("second call", "_______________________________");
alwaysHungry(foodArr2);