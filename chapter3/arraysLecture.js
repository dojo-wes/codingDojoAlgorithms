 // Push Front
 // Write a function that takes one argument.
 // Given an array and an additional argument, insert value at the beginning of the array and return array. Do this without any built in methods.

 var myArr = [];
 var anotherArr = ["cats", 'dogs', 'other']

 myArr.push("Thing1");
 myArr.push("Thing2");
 myArr.push("Thing3");
 myArr.push("Thing4");

 // console.log(myArr);

function pushFront(internalArray, internalData) {

	for (var i = internalArray.length; i > 0; i--) {
		internalArray[i] = internalArray[i - 1];
	}
	internalArray[0] = internalData;

	return internalArray;
}

console.log(pushFront(anotherArr, 'pandas'));
// console.log(myArr);
