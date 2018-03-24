// setting and swapping
// Set myNumber to 42 . Set myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = 'wes';

var temp = myName;
myName = myNumber;
myNumber = temp;
// console.log(myName);
// console.log(myNumber);

// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
function isLeapYear(year) {
	var yearIsLeap = false;
	if (year % 4 == 0) {
		yearIsLeap = true;
	} else if (year % 100 == 0) {
		yearIsLeap = false;
	} else if (year % 4 == 0) {
		yearIsLeap = true;
	}

	console.log("year = ", year, "and yearIsLeap = ", yearIsLeap);
	return yearIsLeap;
}

// for (var i = 2000; i < 2200; i++) {
// 	isLeapYear(i);
// }

// Based on earlier “Countdown by Fours”, given lowNum , highNum , mult , print multiples of mult from highNum down to lowNum , using a FOR . For (2,9,3) , print 963 (on successive lines).
function flexCount(highNum, lowNum, mult) {
	for(var i = highNum; i >= lowNum; i--) {
		if(i % mult == 0) {
			console.log(i);
		}
	}
}

// flexCount(16, 5, 5); // 15, 10, 5
// flexCount(15, 5, 3); // 15, 12, 9, 6

// Your function will receive an array with two numbers. Print the first value, and return the second.
function printAndReturn(arr) {
	console.log(arr[0]);
	return arr[1];
}

var myArr = [10, 5, 3, 4];
// var returnedValue = printAndReturn(myArr);
// flexCount(10, 0, returnedValue);

// var i = 6;
// while (i < 60001) {
// 	console.log(i);
// 	i += 6;
// }

// For [1,3,5,7,9,13] , print values that are greater than its 2 nd value. Return how many values this is.
var someArr = [1, 3, 5, 7, 9, 13];
function valuesGreaterThanSecond(arr) {
	var counter = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[1]) {
			counter++;
			console.log(arr[i]);
		}
	}
	return counter;
}
console.log("counter:", valuesGreaterThanSecond([1, 3, 5, 7, 9, 13]));