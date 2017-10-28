// Page 20
// Your function should accept an array. 
// If value at [0] is greater than the array's length, print "Too big!";
// If value at [0] is less than array's length, print "Too small!";
// Otherwise, print "Just right!";

function fitFirst(arr) {
	if(arr[0] > arr.length) {
		console.log("Too big!");
	} else if(arr[0] < arr.length) {
		console.log("Too small!");
	} else {
		console.log("Just right!");
	}
}

var arrBig = [100, 3];
var arrSmall = [2, 3, 4, 7];
var arrRight = ["yoMama", 3];

fitFirst(arrBig);
fitFirst(arrSmall);
fitFirst(arrRight);