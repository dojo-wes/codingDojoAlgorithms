// Create a js function that given a string, returns the integer made from the string's digits. Given
// "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) {
	var newString = "";
	for(i = 0; i < str.length; i++) {
		if(isNaN(str[i])) {
			continue;
		} else {
			newString += str[i];
		}
	}
	return parseInt(newString);
}

var string = "0s1a3y5w7h9a2t4?6!8?0";

console.log(getDigits(string));