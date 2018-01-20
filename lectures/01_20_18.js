/*First Plus Length
Given an array, return the sum of the first value in 
the array, plus the array’s length. What happens if 
the array’s first value is not a number, but a string 
(like "what?") or a boolean (like false). */

function first_plus_length(arr) {
	var sum = arr[0] + arr.length;
	console.log(sum);
	return sum;
}
// first_plus_length([1, 2, 3, 4]);
// first_plus_length(["hello", "world", 2, 4, 5]);
// first_plus_length([true, 2, 4, 5]);

/*Letter Grade
Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? 
Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’.

Example: given 88, you should log "Score:88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D". */
function letterGrade(score){
    var grade = "";
    if(score > 89 && score < 101){
        grade = "A";
    }
    else if(score > 79){
        grade = "B";
    }
    else if(score > 69){
        grade = "C";
    }
    else if(score > 59){
        grade = "D";
    }
    else if(score < 60 && score > -1){
        grade = "F";
    }
    else {
        grade = "invalid number, please input a number with the range of 0 to 100";
    }
    console.log("Score: " + score + ". Grade: " + grade);    
}
// letterGrade(90);
// letterGrade(85);
// letterGrade(75);
// letterGrade(65);
// letterGrade(45);
// letterGrade(120);

// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug .
function isPrime(int) {
	for(var i = 2; i < int / 2; i++) {
		if(int % i === 0) {
			return false;
		}
	}
	return true;
}

// console.log(isPrime(7)); // true
// console.log(isPrime(8)); // false
// console.log(isPrime(17)); // true
// console.log(isPrime(9)); // false


// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 ( fib(0) + fib(1) , or 0+1), fibonacci(3) = 2 ( fib(1) + fib(2) , or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.
function fibonacci(index) {
	if(index === 0) {
		console.log(0);
		return 0;
	}
	if(index === 1) {
		console.log(1);
		return 1;
	}

	var first = 0;
	var second = 1;
	var sum = 0;
	for(var i = 2; i <= index; i++) {
		sum = first + second;
		first = second;
		second = sum;
	}

	console.log(sum);
	return sum;
}
// fibonacci(6);

// Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2) , return 8 . Given (1824,0) , return 4 . Given (1824,7) , return 0 .

// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1) , return 4 .

// Third: handle negative num values as well, doing what you think is appropriate.

function extractDigit(num, digitNum) {
	// var divideBy = Math.pow(10, digitNum);
	// return Math.trunc(num / divideBy) % 10;
	return Math.trunc(num / Math.pow(10, digitNum)) % 10;
}

console.log(extractDigit(213, 2)); // 3

// console.log(Math.trunc(213 / 10) % 10);