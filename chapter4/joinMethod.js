function join(arr, separator) {
	var newString = '';
	if(!separator) {
		separator = ","
	}
	for(i = 0; i < arr.length - 1; i++) {
		newString += (arr[i] + separator);
	}
	newString += arr[arr.length - 1]; // can also use arr[i]
	return newString;
}

var array = ["This", 'will', 'be', 'a', 'string!'];
console.log(join(array, " "))