// Page 28
// From the above, (starArt) derive the following that accept and draw the given characters, not just asterisks:
// 	- drawLeftChars(num, char);
// 	- drawRightChars(num, char);
// 	- drawCenteredChars(num, char);
// For this example we can safely assume that 'char' is a string with length 1.

function drawLeftChars(num, char) {
	var textField = "";
	for(var i = 1; i <= 75; i++){
		if(num > 0) {
			textField += char;
			num--;
		} else {
			textField += " ";
		}
	}
	console.log(textField);
}

function drawRightChars(num, char) {
	var textField = "";
	for(var i = 1; i <= 75; i++){
		if(num > 0) {
			textField = char + textField;
			num--;
		} else {
			textField = " " + textField;
		}
	}
	console.log(textField);
}

function drawCenteredChars(num, char) {
	var textField = "";
	var space = (75 - num) / 2;
	for(var i = 0; i <= 75; i++) {
		if(space > 0) {
			textField += " ";
			space--;
		} else if(num > 0) {
			textField += char;
			num--;
		} else {
			textField += " ";
		}
	}
	console.log(textField);
}

drawLeftChars(15, "~");
drawRightChars(15, "&");
drawCenteredChars(15, "$");