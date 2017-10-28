// Page 28
// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and
// asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively.
// Depending on which function is called, those stars should be left-justified (first star would be very first
// char in the text field), or right-justified (last star would be very last char in the text field, with potentially
// some number of spaces at beginning of text field before the block of stars start), or centered in the 75-
// character text field (with same number of spaces on either side of the block of stars, plus/minus one).
// 	- Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
// 	- Write a function drawRightStars(num) that prints 75 characters total. Stars should build
// 	from right side. The last num characters should be asterisks; the other 75 should be spaces.
// 	- Write function drawCenteredStars(num) that prints 75 characters total. The stars should be
// 	centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.
// 	- (optional) Create epic text-art Empire vs. Rebellion battle, using formations like (=*=) and >o<.

function drawLeftStars(num) {
	var textField = "";
	for(var i = 1; i <= 75; i++) {
		if(num > 0) {
			textField += "*";
			num--;
		} else {
			textField += " ";
		}
	}
	console.log(textField);
}

function drawRightStars(num) {
	var textField = "";
	for(var i = 1; i <= 75; i++) {
		if(num > 0) {
			textField = "*" + textField;
			num--;
		} else {
			textField = " " + textField;
		}
	}
	console.log(textField);
}

function drawCenteredStars(num) {
	var textField = "";
	var space = (75 - num) / 2;
	for(var i = 1; i <= 75; i++) {
		if(space > 0) {
			textField += " ";
			space--;
		} else if(num > 0) {
			textField += "*";
			num--;
		} else {
			textField += " ";
		}
	}
	console.log(textField);
}

drawLeftStars(15);
drawRightStars(15);
drawCenteredStars(15);