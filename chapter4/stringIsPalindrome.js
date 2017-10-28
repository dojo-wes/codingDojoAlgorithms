// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "ra cecar"
// return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.

var string1 = "Dud";
var string2 = "oho!";
var string3 = "a x a";
var string4 = "ra cecaasdr";

//loop through string and check to see if first index is equal to last
function isPalindrome(str) {
	for(i = 0; i < (str.length - 1) / 2; i++) {
		if(str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

// console.log(isPalindrome(string1));
// console.log(isPalindrome(string2));

// Second: now DO ignore white space (spaces, tabs, returns), capitalization and punctuation.
function isPalindrome2(str) {
	var newString = "";
	var acceptedChars = /[a-z]/i;
	//Get rid of everything we don't want
	for(i = 0; i < str.length; i++) {
		if(acceptedChars.test(str[i])) {
			newString += str[i];
		}
	};
	var lowerCase = newString.toLowerCase();
	console.log(lowerCase);
	//Check to see if it's a palindrome
	for(i = 0; i < (lowerCase.length - 1) / 2; i++) {
		if(lowerCase[i] !== lowerCase[lowerCase.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(isPalindrome2(string1));
console.log(isPalindrome2(string2));
console.log(isPalindrome2(string3));
console.log(isPalindrome2(string4));