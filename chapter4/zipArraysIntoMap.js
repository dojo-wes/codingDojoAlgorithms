// Associative arrays are sometimes called maps because a key (string) maps to a value.
// Given two arrays, create an associative array (map) containing keys of the first,
// and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true],
// return {"abc" : 42, 3 : "wassup", "yo" : true}

//

function zipArrays(keys, values) {
	var newObject = {};
	for(var i = 0; i < keys.length; i++) {
		newObject[keys[i]] = values[i];
	}
	return newObject;
}

arr1 = ["abc", 3, "yo", "hi", "bye"];
arr2 = [1, 0, true, false];
console.log(zipArrays(arr1, arr2));