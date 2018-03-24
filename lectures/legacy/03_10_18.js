// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3 ); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5 ).

function sigma(num) {
	var sum = 0;
	for(var i = 1; i <= num; i++) {
		sum += i;
	}
	console.log(sum);
	// return sum;
}

// sigma(5);
// var result = sigma(5);
// console.log(result + 3);

function factorial(num) {
	var product = 1;
	for(var i = 1; i <= num; i++) {
		product *= i;
	}
	console.log(product);
	return product;
}

// factorial(5);

// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ( '*' ), sometimes called stars . You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (first star would be very first char in the text field), or right-justified (last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75-character text field (with same number of spaces on either side of the block of stars, plus/minus one).

// Write a function drawLeftStars(num) that accepts a number and prints that many

// asterisks.

// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side. The last num characters should be asterisks; the other 75 should be spaces.
// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest
// of the 75 spaces.

// (optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like

// ( =*=) and >o< .

function drawLeftStars(num) {
	var str = "";
	for(var i = 0; i < 75; i++) {
		if(i < num) {
			str += "*";
		} else {
			str += " ";
		}
	}
	// console.log(str);
	return str;
}

var myString = drawLeftStars(3);
console.log(myString);
console.log(myString.length);

console.log(drawLeftStars(3).length);

function logger(str) {
	console.log(str);
	console.log(str.length);
}

logger(drawLeftStars(3));