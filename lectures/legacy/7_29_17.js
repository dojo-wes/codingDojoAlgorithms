// pushFront - review
var myArr = [1,2,3,4];

function pushFront(data, array) {
	for(var i = array.length; i > 0; i--) {
		array[i] = array[i - 1];
	}

	array[0] = data;

	console.log("pushFront", array);
	return array;
}

// pushFront("thing", myArr);

// popFront - Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(array) {
	var data = array[0];

	for(var i = 0; i < array.length - 1; i++) {
		array[i] = array[i + 1];
	}

	array.length -= 1;

	console.log("popFront - Array: ", array);
	return data;
}

// console.log("popFront - Returned Data: ",(popFront(myArr)));

// insertAt - Given array, index, and additional value, insert the value into array at given index. Do this without using any built-in array methods.
function insertAt(array, index, value) {
	if(index > array.length || index < 0) {
		console.log("Did you mean to use an index value within range?");
		console.log("insertAtFAIL", array);
		return array;
	}

	for(var i = array.length; i > index; i--) {
		array[i] = array[i - 1];
	}

	array[index] = value;

	console.log("insertAt", array);
	return array;
}

// insertAt(myArr, 55, "anotherThing");
// insertAt(myArr, 4, "anotherThing");

// removeAt - Given array, index, remove and return the array value at that index. Do this without using any built-ins except pop().
function removeAt(array, index) {
	if(index > array.length - 1 || index < 0) {
		console.log("please choose an index within range");
		return;
	}

	var value = array[index];

	for(var i = index; i < array.length - 1; i++) {
		array[i] = array[i + 1];
	}

	array.length -= 1;

	console.log("removeAt", array, "removeAt - value: ", value);
	return value;
}

// removeAt(myArr, 2);


// swapPairs - Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input["Brendan", true, 42] to [true, "Brendan", 42]
function swapPairs(array) {
	var length = array.length % 2 === 0 ? array.length : array.length - 1;

	// var length = array.length;
	// if(array.length % 2 === 1) {
	// 	length = array.length - 1;
	// }

	for(var i = 0; i < length; i += 2) {
		// if(array[i + 1] === undefined) {
		// 	console.log(array);
		// 	return array;
		// }
		var temp = array[i];
		array[i] = array[i + 1];
		array[i + 1] = temp;
	}

	console.log(array);
	return array;
}

// swapPairs(myArr);
// swapPairs(arr2);
// removeDuplicates - Given a sorted array, remove duplicate value. Assume this is a sorted array. No built-ins. Challenge - no nested loops.
var arr2 = [1,"two","two","two","two",3,3,4,5,5,5,5,5,5,5,5,5,6,7,8,9,10];

function removeDuplicates(array) {
	for(var outerIdx = 0; outerIdx < array.length; outerIdx++) {
		console.log("outer loop --- " + "outerIdx: " + outerIdx);
		if(array[outerIdx] === array[outerIdx + 1]) {
			console.log("_________________________________________");
			for(var innerIdx = outerIdx; innerIdx < array.length - 1; innerIdx++) {
				console.log("inner loop --- " + "outerIdx: " + outerIdx + " innerIdx: " + innerIdx + " arr[innerIdx]: " + array[innerIdx] + " arr[innerIdx + 1]: " + array[innerIdx + 1] + " array[outerIdx]: " + array[outerIdx]);
				array[innerIdx] = array[innerIdx + 1];
				console.log(array);
			}
			console.log("_________________________________________");
			array.length -= 1;
			outerIdx -= 1;
		}
	}

	console.log(array);
	return array;
}

// removeDuplicates(arr2);

function removeDuplicates2(array) {
	var curr = 0;

	for(var i = 1; i < array.length; i++) {
		if(array[i] !== array[curr]) {
			array[curr + 1] = array[i];
			curr += 1;
		}
	}

	console.log(curr);
	var wanted = curr + 1;

	array.length -= (array.length - wanted);

	console.log(array);
}

removeDuplicates2(arr2);
