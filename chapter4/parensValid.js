// Given a string, determine whether the parentheses are valid. i.e. "(())" returns valid and "(()("
// returns invalid

function parensValid(string) {
	parensnum = 0;
	for (var i = 0; i < string.length; i++) {
		if(string[i] == '(') {
			parensnum++;
		} else if(string[i] == ')') {
			parensnum--;
		}
		if (parensnum < 0) {
			return false;
		}
	}
	return !parensnum; //coerces value into boolean
}

var str1 = "abc(def)" //true
var str2 = "(())" //true
var str3 = "(()(" //false
var str4 = "))((" //false

console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));