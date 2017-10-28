function isAlphabetical(str) {
	str = str.toLowerCase();
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i + 1) < str.charCodeAt(i)) {
			console.log("This string is not alphabetical");
			return false;
		}
	}
	console.log("This string", str, "is alphabetical.");
	return true;
}

var str1 = 'about'
var str2 = 'accent'
var str3 = 'dog'

console.log(isAlphabetical(str1))
console.log(isAlphabetical(str2))
console.log(isAlphabetical(str3))