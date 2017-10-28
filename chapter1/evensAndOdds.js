// Page 22
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That's odd!"
// Every time the array has three evens in a row, print "Even more so!"

//can use logical operators OR tallies
function evenOdd(arr) {
	for(var i = 2; i < arr.length; i++) {
		if(arr[i] % 2 === 0 && arr[i - 1] % 2 === 0 && arr[i - 2] % 2 === 0) {
			console.log("Even more so!");
		}
		if(arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0 && arr[i - 2] % 2 !== 0) {
			console.log("That's odd!");
		}
	}
}

//does it want the function to print each time there are three numbers in a row without using the same number twice?
//Example: this function prints "That's odd!" twice if there are 4 odds in a row.
var array = [1,3,5,2,4,6,1,2,3,1,2,3,1,1,1,4,4,4];
evenOdd(array);