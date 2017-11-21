function isPrime(num) {
	for(var i = Math.trunc(num / 2); i > 1; i--) {
		if(num % i === 0) {
			console.log("This is evenly divisible by: " + i + "!");
			return false;
		}
	}
	console.log("This is prime!");
	return true;
}

// isPrime(17);


// Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2) , return 8 . Given (1824,0) , return 4 . Given (1824,7) , return 0 .

// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1) , return 4 .

// Third: handle negative num values as well, doing what you think is appropriate.
function extractDigit(num, digitNum) {
	// if(num < 0) {
	// 	console.log("don't use negatives!");
	// 	return null;
	// }
	return Math.floor(Math.abs(num) / Math.pow(10, digitNum)) % 10;
}

var num = 3568.23;
// console.log(Math.floor(num / 10) % 10);
console.log(extractDigit(-num, 0));
