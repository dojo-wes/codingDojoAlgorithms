function bookIndex(arr) {
	var str = '';
	var temp = '';
	var start = 0;
	var end = 0;
	for(var i = 0; i < arr.length; i++) {
		// console.log("start", start, "end", end, "i", i, "str", str, "temp", temp);
		if(arr[i] + 1 != arr[i + 1]) {
			if(temp.length > 0) {
				str += temp;
				temp = '';
			}
			else {
				str += arr[i];
			}
			str += ', ';
			start = i + 1;
		} else if(arr[i] + 1 == arr[i + 1]) {
			end = i + 1;
			temp = arr[start] + "-" + arr[end];
		}
	}
	return str;
}

var array = [1, 13, 14, 15, 37, 38, 70]
console.log(bookIndex(array))