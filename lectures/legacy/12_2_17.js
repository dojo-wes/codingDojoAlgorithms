var myName = "Wes";
var myNum = 42;
var temp = myName; 
myName = myNum;
myNum = temp;

// print one return another
// Build a funciton that takes an array of numbers. The function should print the second-to-last value in the array and return the first odd value in the array.
function printOneReturnAnother(arr) {
	console.log(arr[arr.length - 2]);
	// var temp = false;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] % 2 !== 0) {
			return arr[i];
			// temp = arr[i];
			// break;
		}
	}
	return false;
}
var myArr = [5, 8, 102, 123, 5, 123, 4, 77, 8];
var arr2 = [2, 4, 6, 8, 10];

// console.log(printOneReturnAnother(myArr));
// if(printOneReturnAnother(arr2)) {
// 	console.log("returned value is true");
// } else {
// 	console.log("returned value is false");
// }
// console.log(printOneReturnAnother(arr2));


// Build a function that takes an array of numbers. The function should print the lowest value in the array and return the highest value in the array.
function printLowReturnHigh(arr) {
	var lowest = arr[0];
	var highest = arr[0];
	// console.log("lowest:", lowest, "highest:", highest);
	for(var i = 1; i < arr.length; i++){
		if(arr[i] < lowest) {
			lowest = arr[i];
			// console.log("current lowest:",lowest);
		}
		if(arr[i] > highest) {
			highest = arr[i];
			// console.log("current highest:", highest);
		}
	}
	console.log(lowest);
	return highest;
}
// console.log("returned value:", printLowReturnHigh(myArr));

// flexible countdown
function flexibleCountdown(lowNum, highNum, mult) {
	for (var i = highNum; i >= lowNum; i--) {
		if (i % mult == 0) {
			console.log(i);
		}
	}
	// return i;
}

// flexibleCountdown(2, myName, 3);



// countdown by fours
// log positive numbers starting at 2016, counting down by fours (exclude 0). 2nd: Without a for loop.
for(var num = 2016; num > 0; num -= 4) {
	// console.log(num);
}

var num = 2016;
while(num > 0) {
	// console.log(num);
	// num -= 4;
	num = num - 4;
}

// 