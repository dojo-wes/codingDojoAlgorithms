// setting and swapping
// Set myNumber to 42 . Set myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = "Ana";
var temp = myNumber;
myNumber = myName;
myName = temp;
// console.log('myName:', myName, 'myNumber:', myNumber);

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
var count = 0;
for(var i = 515; i <= 4096; i += 5) {
	// console.log('i:', i);
	count += 1;
}
// console.log('count:', count);

var count = 0;
var i = 512;
while(i <= 4096) {
	if(i % 5 === 0) {
		// console.log('i:', i);
		count += 1;
	}
	i++;
}
// console.log('count', count);

// Flexible Countdown
// given lowNum , highNum , mult , print multiples of mult from highNum down to lowNum , using a FOR . For (2,9,3) , print 963 (on successive lines).
function flexCountdown(lowNum, highNum, mult) {
	for(var i = highNum; i >= lowNum; i--) {
		if((i % mult) === 0) {
			console.log(i);
		}
	}
}

var high = 31;
// flexCountdown(4, high, 7);
// console.log('high:', high);

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
function printAndReturn(arr) {
	console.log(arr[0]);
	return arr[1];
}

var myArray = [1, 2, [0, 4]];
// console.log(myArray[myArray[2][0]]);
// var returnedVal = printAndReturn(myArray);
// console.log('returned value:', returnedVal);
// printAndReturn([3, 40, 8, 9]);
console.log('returned value:', printAndReturn(myArray));