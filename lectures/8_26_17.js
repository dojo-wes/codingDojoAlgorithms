// Zip arrays into map:
// Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array containing keys of the first and values of the second.
// arr1 = ['abc', 3, 'yo'], arr2=[42, 'wassup', true], return {'abc': 42, 3: 'wassup', 'yo': true};
function zipArrays(arr1, arr2) {
	// if(arr1.length !== arr2.length) {
	// 	console.log("arrays must be same length");
	// 	return;
	// }
	var result = {};
	//var j =0;
	for(var i =0;i < arr1.length;i++) {
		if(result[arr1[i]]) {
			// console.log("duplicate key index: " + i);
			continue;
		}
		result[arr1[i]] = arr2[i];
	}
	// console.log(result);
	return result;
}
var arrayOne = ['a', 'b', 'c'];
var arrayTwo = [1, 2, 3];

var newObj = zipArrays(arrayOne, arrayTwo);

// Invert hash:
// Associative arrays are also called hashes. Build invertHash to convert hash keys to values, and values to keys.
// {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return {"Zaphod": "name", "high": "charm", "dicey": "morals"};
function invertHash(hash) {
	for(key in hash) {
		var temp = hash[key];
		hash[temp] = key;
		delete hash[key];
	}
	console.log(hash);
	return hash;
}

// invertHash(newObj);

// Associative Array: Number of Values (without .length);
// Without using the .length property, determine and return the number of values in the given array. If we were to do this on a numerical array, we might check to see whether the element at a certain numerical index was undefined. Unfortunately, we can't do that here because the keys don't have any sort of predictable order or first value.
function numValues(obj) {
	var counter = 0;
	for(key in obj) {
		counter ++;
	}
	console.log(counter);
	return counter;
}

// numValues(newObj);

for(idx in arrayOne) {
	console.log(arrayOne[idx]);
}
