// Page 30
// Create a function to generate Fibonnacci numbers. In this famous mathematical sequence, each number
// is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument,
// an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four
// later, etc.) Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1
// (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3
// (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

function fibonacci(num) {
	var fib = [];
	if(num === 0) {
		return 0;
	} else if(num === 1) {
		return 1;
	} else {
		for(var i = 2; i <= num; i++) {
			fib[i] = fib[i - 1] + fib[i - 2];
		}
		return fib[i];
	}
}

//create fibonacci recursively
function recurFib(n, a, b) {
	a = a || 0;
	b = b || 1;
	if(!n) {
		return a;
	}
	return recurFib(n-1, b, a + b);
}