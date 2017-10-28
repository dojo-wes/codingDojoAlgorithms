// Takes a string and a number of rotations to make on it.
// Given ('Bordis Godunov', 5), you should return 'dunovBordis Go'.

// Level 2, no built ins
// Level 3, negative numbers shift left

// function rotateString(str, numRotations) {
// 	while(numRotations) {
// 		// console.log("numRotations", numRotations);
// 		var newStr = str[str.length - 1];
// 		// console.log("newStr", newStr, "first for loop");
// 		for(var i = 0; i < str.length - 1; i++) {
// 			// console.log("newStr", newStr, "inner loop");
// 			newStr += str[i];
// 		}
// 		str = newStr;
// 		numRotations--;
// 	}
// 	// console.log("breaking");
// 	return str;
// }

// console.log(rotateString('Bordis Godunov', 5))

module.exports.rotate = function(str, numRotations=1) {
	// console.log(str);
	while(numRotations) {
		// console.log("numRotations", numRotations);
		var newStr = str[str.length - 1];
		// console.log("newStr", newStr, "first for loop");
		for(var i = 0; i < str.length - 1; i++) {
			// console.log("newStr", newStr, "inner loop");
			newStr += str[i];
		}
		str = newStr;
		numRotations--;
	}
	// console.log("breaking");
	return str;
}