// string.prototype.splitter(separator, limit)

function split(string, separator, limit) {
	var array = [];
	var regEx = "/" + separator +"/";
	console.log(regEx)
	if(separator === '') {
		for(i = 0; i < string.length; i++) {
			array.push(string[i]);
		}
	} else if(!separator) {
		array.push(string);
	} else if(separator.length > 0) {
		var newString = "";
		for(i = 0; i < string.length && array.length <= limit; i++) {
			if(string[i] !== separator) {
				newString += string[i];
			} else {
				array.push(newString);
				newString = "";
			}
			if(i == string.length - 1) {
				array.push(newString);
			} 
		}
	}
	return array;
}


var myString = "This is a string yo!";
console.log(split(myString, "|"));