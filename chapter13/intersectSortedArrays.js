// Page 134

function intSorted(arr1, arr2) {
	var buffer = {};
	if(arr1.length > arr2.length) {
		var temp = arr1;
		arr1 = arr2;
		arr2 = temp;
	}

	for(var i = 0; i < arr1.length; i++) {
		if(buffer[arr1[i]]) {
			buffer[arr1[i]][0] += 1;
		} else {
			buffer[arr1[i]] = [1, 0];
		}
	}

	for(var i = 0; i < arr2.length; i++) {
		if(buffer[arr2[i]]) {
			buffer[arr2[i]][1] += 1;
		}
	}

	var result = [];
	for(var key in buffer) {
		if(buffer[key][0] && buffer[key][1]) {
			if(buffer[key][0] < buffer[key][1]) {
				for(var i = 0; i < buffer[key][0]; i++) {
					result.push(key);
				}
			} else {
				for(var i = 0; i < buffer[key][1]; i++) {
					result.push(key);
				}
			}
		}
	}
	console.log(buffer);
	return result;
}

var array1 = [1,2,2,2,7]
var array2 = [2,2,6,6,7]
console.log(intSorted(array1, array2));