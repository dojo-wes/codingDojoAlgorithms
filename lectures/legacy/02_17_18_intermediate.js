function parens_valid(str) {
	// console.log(str);
	// var valid = true;
	var numopen = 0;
	for (var i = 0; i < str.length; i++) {
		// console.log(i, str[i]);
		if (str[i] == "(") {
			numopen++;
			// console.log("increased numopen to", numopen);
		} else if (str[i] == ")") {
			numopen--;
			// console.log("decreased numopen to", numopen);
		}
		if (numopen < 0) {
			return false;
		}
	}
	if (numopen != 0) {
		return false;
	}
	// console.log("final numopen =", numopen);
	return true;
}

var teststr1 = "N(0)t ) 0(k";
// console.log(parens_valid(teststr));
var teststr = "(JKJK(a)(b(isd)) iippo(23)io)";
// console.log(parens_valid(teststr));
// console.log(parens_valid("(adk("));

// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true . "D(i{a}l[ t]o)n{e" => false . "A(1)s[O (n]0{t) 0}k" => false.

//good idea but doesn't quite catch all the edge cases
// function checkBraceType(str, openChar, closeChar) {
// 	var numopen = 0;
// 	for (var i = 0; i < str.length; i++) {
// 		if (str[i] == openChar) {
// 			numopen++;
// 		} else if (str[i] == closeChar) {
// 			numopen--;
// 		}
// 		if (numopen < 0) {
// 			return false;
// 		}
// 	}
// 	if (numopen != 0) {
// 		return false;
// 	}
// 	return true;
// }

// function bracesValid(str) {
// 	return checkBraceType(str, "(", ")") && checkBraceType(str, "[", "]") && checkBraceType(str, "{", "}");
// }

function bracesValid(str) {
	console.log('start:', new Date().getMilliseconds());
	// how do we define whether the inner braces have been closed first?
	// we can't close a type if the last open was of a different type
	var braces = {
		'}' : '{',
		']' : '[',
		')' : '('
	};
	var opens = [];
	for(var i = 0; i < str.length; i++) {
		if(str[i] === '(' || str[i] == '[' || str[i] == '{') {
			opens.push(str[i]);
		} else if(braces[str[i]]) { // braces[str[i]] is either undefined or open of current brace type
			if(braces[str[i]] !== opens.pop()) {
				return false;
			}
		}
	}
	console.log(str, '!opens.length', !opens.length);
	console.log('end:', new Date().getMilliseconds());
	return !opens.length ? true : false;
}

var test = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
var test2 = "A(1)s[O (n]0{t) 0}k";
var test3 = "D(i{a}l[ t]o)n{e";
console.log(bracesValid(test)); // true
// console.log(bracesValid(test2)); // false
// console.log(bracesValid(test3)); // false


// String.split(separator,limit) -split string into an array of substrings, returning array. Separator specifies where to divide substrings and is not included in any substring. If "" is specified, split the string on every character. Limit is optional and indicates number of splits; additional post-limit items should be discarded. Note: existing string is unaffected.
function split(str, separator, limit) {
	var result = [];
	var subStr = '';
	for(var i = 0; i < str.length; i++) {
		var found = true;
		for(var j = 0; j < separator.length; j++) {
			if(str[i + j] !== separator[j]) {
				found = false;
				break;
			}
		}
		if(!found) {
			subStr += str[i];
		} else {
			result.push(subStr);
			subStr = '';
			i += separator.length - 1;
		}
	}
	result.push(subStr);
	console.log(result);
	return result;
}
var test = 'this/is/a/string';
split(test, '/is'); // [this, is, a, string]