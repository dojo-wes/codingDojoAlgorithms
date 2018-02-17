function negative(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = -Math.abs(arr[i]);
	}
	console.log(arr);
}

// negative([1, -3, 5]);

function testYear(year) {
	if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
		console.log("It's a leap year");
	} else {
		console.log("It's not a leap year");
	}
}
// testYear(2004);

// Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3 ); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5 ).
function factorial(num) {
	var product = 1;
	for(var i = 2; i <= num; i++) {
		product *= i;
	}
	return product;
}

// var bigNum = 1000 + factorial(5);
// console.log('bigNum:', bigNum);
// console.log(factorial(factorial(3))); // factorial(6)

// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ( '*' ), sometimes called stars . You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (first star would be very first char in the text field), or right-justified (last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75-character text field (with same number of spaces on either side of the block of stars, plus/minus one).

// Write a function drawLeftStars(num) that accepts a number and prints that many

// asterisks.

// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side. The last num characters should be asterisks; the other 75 should be spaces.
// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest
// of the 75 spaces.

// (optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like

// ( =*=) and >o< .

function drawLeftStars(num) {
	// we know length should be 75
	// we know how many stars (num)
	// return a string
	// num stars at beginning of string, 75 - num spaces at end
	var result = '';
	// for(var i = 0; i < num; i++) {
	// 	result += '*';
	// }
	// for(var i = num; i <= 75; i++) {
	// 	result += ' ';
	// }

	// for(var i = 0; i < 75; i++) {
	// 	if(i < num) {
	// 		result += '*';
	// 	} else {
	// 		result += ' ';
	// 	}
	// }

	for(var i = 0; i < 75; i++) {
		// result = someExpression ? valueIfTrue : valueIfFalse;
		result = i < num ? result + "*" : result + ' ';
	}
	console.log(result);
	return result;
}

console.log(drawLeftStars(5).length);
// console.log('hello'.length);
var string = 'hello';
string = ' ' + string;
console.log(string);