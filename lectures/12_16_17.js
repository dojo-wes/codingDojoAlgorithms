// setting and swapping
// Set myNumber to 42 . Set myName to your name. Now swap myNumber into myName & vice versa.
var myNumber = 42;
var myName = 'Ada';

var temp = myNumber;
myNumber = myName;
myName = temp;

// console.log(myNumber);
// console.log(myName);

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

// for(var i = -52; i < 1067; i++) {
// 	console.log(i);
// }

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum , highNum , mult , print multiples of mult from highNum down to lowNum , using a FOR . For (2,9,3) , print 963 (on successive lines).

function flexCountdown(lowNum, highNum, mult) {
	for(var i = highNum; i >= lowNum; i--) {
		if(i % mult == 0) {
			console.log(i);
		}
	}
	console.log("done with loop");
}

// flexCountdown(2, 12, 4);

function flexCountdown2(lowNum, highNum, mult) {
	// var i = highNum;
	while(highNum >= lowNum) {
		if(highNum % mult == 0) {
			console.log(highNum);
		}
		// i -= 1;
		// i = i - 1;
		highNum--;
	}
	return highNum;
}

var high = 19;
var low = 2;
var multiple = 4;
flexCountdown2(low, high, multiple);
// console.log("high", high);

function pr(array) {
	console.log(array[0]);
	return array[1];
}
// console.log(pr([10, 7]));
// console.log(pr([10, 100]) + 50);
