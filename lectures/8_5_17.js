// Array concat(). Create a standalone function that accepts 2 arrays. Return a NEW array containing the first array's elements followed by the second array's elements. Do NOT alter the original arrays.

function arrConcat(array1, array2) {
	var newArr = [];

	for(var i = 0; i < array1.length; i++) {
		newArr[i] = array1[i];
	}

	for(var i = 0; i < array2.length; i++) {
		// newArr.push(array2[i]);
		newArr[newArr.length] = array2[i];
	}

	console.log(newArr);
	return newArr;
}


var anything = [1,2,3,4];

// console.log("anything.length = " + anything.length);
// anything[anything.length] = 5;
// console.log(anything);
// console.log("anything.length = " + anything.length);

var anythingElse = ["shoes", "hats"];
var somethingNew = [1,2,3,4,5,6,7,8,9,12,100]

arrConcat(anything, anythingElse);
