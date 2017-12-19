// setting and swapping
var myNum = 42;
var myName = 'Wes';

var temp = myNum;
// console.log(temp);
myNum = myName;
myName = temp;

// console.log(myNum);
// console.log(myName);

// log positive numbers starting at 2016, counting down by fours (exclude 0), without a for
// for(var i = 2016; i > 0; i -= 4) {
// 	console.log(i);
// }

// var num = 2016;
// while(num) {
// 	console.log(num);
// 	num -= 4;
// }

// var num = 100;
// console.log(num -= 10);
// console.log(num);

// values greater than second
// for [1,3,4,5,7,13] print values that are greater than its second value. return how many values this is.
function valsGreaterThanSecond(arr) {
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[1]) {
			console.log(arr[i]);
			sum++;
		}
	}
	return sum;
}


// console.log(valsGreaterThanSecond([1, 3, 4, 5, 7, 13]) + valsGreaterThanSecond(testArr));
// var mySum2 = valsGreaterThanSecond(testArr);
// console.log(mySum1 * mySum2);

// Values greater than second generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2 nd value. Print how many values this is. What will you do if the array is only one element long?
function generalVals(arr) {
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[1]) {
			newArr.push(arr[i]);
		}
	}
	console.log(newArr.length);
	return newArr;
}

var testArr = [2, 4, 5, 6, 10, 18, 9];
// generalVals(testArr);
// var value = valsGreaterThanSecond(generalVals(testArr));
// console.log("value", value);

function callbacker(callback) {
	var number = 1000;
	callback(number);
}

callbacker(function(info) {
	console.log(info + 100);
})