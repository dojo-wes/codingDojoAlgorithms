var string = 'this/is/a/string';
console.log(string.split('/is/'));
// console.log('the' == 'the');
// console.log(string);
// return an array of strings, excluding delimiter string
function split(str, delimiter) {
	var arr = [];
	arr.push('');
	var arrIdx = 0;
	for(var i = 0; i < str.length; i++) {
		if(str[i] !== delimiter) {
			arr[arrIdx] += str[i];
		} else {
			arrIdx += 1;
			arr.push('');
		}
	}
	return arr;
}
// console.log(split(string, '/'));

function split2(str, delimiter) {
	var arr = [];
	var subString = '';
	for(var i = 0; i < str.length; i++) {
		if(str[i] !== delimiter) {
			subString += str[i];
		} else {
			arr.push(subString);
			subString = '';
		}
	}
	arr.push(subString);
	return arr;
}
// console.log(split2(string, '/'));

function split3(str, delim) {
	var dLen = delim.length;
	var arr = [];
	var subString = '';
		for(var i = 0; i < str.length - dLen + 1; i++) {
		var testString = '';
		for(var j = i; j < dLen + i; j++) {
			testString += str[j];
		}
		if(testString !== delim) {
			subString += str[i];
		} else {
			arr.push(subString);
			i += dLen - 1;
			subString = '';
		}
	}
	for(var i = str.length - dLen + 1; i < str.length; i++) {
		subString += str[i];
	}
	arr.push(subString);
	return arr;
}
console.log(split3(string, '/is/'));