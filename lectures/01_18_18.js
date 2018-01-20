x = "AbCd";

function upperToLower(str) {
	console.log(str);
	var newStr = '';
	var checker = { 
		A: "a",
		B: 'b',
		C: 'c',
	};
	// loop through string
	// determine if uppercase
	// if so, lowercase it
	// for(var i=0; i < str.length; i++) {
		// if(checker[str[i]]) {
		// 	newStr += checker[str[i]];
		// } else {
		// 	newStr += str[i];
		// }
	// }

	for(var i =0; i < str.length; i++) {
		// some condition ? do this if true : do this if false;
		var currChar = checker[str[i]] ? checker[str[i]] : str[i];
		newStr += currChar;
	}

	console.log(newStr);
	return newStr;
}

upperToLower(x);

function isTrue(thing) {
	var newThing = thing ? 'it is true' : 'it is false';
	return newThing;
}
console.log(isTrue(true));


//callback
// function caller(callback, args) {
// 	callback(args);
// };

// function myFunc(str) {
// 	console.log(str);
// };

// caller(myFunc, "hello world");

// caller(function(str) {
// 	console.log(str);
// }, "hello world");

// caller((str) =>	console.log(str), "hello world");

function zipArraysIntoMap(arr1, arr2) {
	// loop through each array
	// use arr1 as key, arr2 as values
	if(arr1.length !== arr2.length) {
		throw new Error('cannot map, uneven lengths');
	}
	var obj = {};
	for(var i = 0; i < arr1.length; i++) {
		obj[arr1[i]] = arr2[i];
	}
	console.log(obj);
	return obj;
}

var test1 = ['hi', 'another'];
var test2 = ['oh hello', 'another hello'];
zipArraysIntoMap(test1, test2);

