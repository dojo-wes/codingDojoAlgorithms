// if 2 given numbers represent your birth day and month in either order...
function sayBirthDay(num1, num2) {
	if((num1 === 6 && num2 === 11) || (num2 === 6 && num1 === 11)) {
		console.log("How did you know?");
		return;
	}
	console.log("Just another day");
	return;
}

// sayBirthDay(11, 6);
// sayBirthDay(6, 11);

// Factorial Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5)

function factorial(num) {
	for(var i = num - 1; i > 0; i--) {
		num *= i;
	}
	return num;
}

// ((6 * (6 - 1)) * (6 - 2)) * (6 - 3);
// product *= (6 - 1);
// product = product * (6 - 1);

console.log(factorial(6));

// Fibonacci Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc

function fibonacci(num) {
	if(num === 0) {
		return 0;
	} else if(num === 1) {
		return 1;
	}
	var values = [0, 1];
	for(var i = 2; i <= num; i++) {
		values.push(values[i - 1] + values[i - 2]);
	}
	console.log(values);
	console.log(values[num]);
	return values[num];
}

fibonacci(9);
// fib(0) = 0
// fib(1) = 1
// fib(2) = 0 + 1
// fib(3) = 1 + 1
// fib(4) = 1 + 2
// fib(5) = 2 + 3
// fib(6) = 3 + 5

// num = number of iterations
// sum = prev + prevPrev;
// temp = prev;
// prev = sum;
// prevPrev = temp;
// [0, 1, 1, 2, 3, 5, 8]

//recursive floodFill
var twoDimArry = [
	[3,2,3,4,3],
	[2,3,3,4,0],
	[7,3,3,5,3],
	[6,5,3,4,1],
	[1,2,3,3,3],
	[1,2,3,3,3]
];
var startXY =[2,2];
var pixColor = 1;
function floodFill(canvas2D,startXY,newColor) {
	//var start = canvas2D[startXY[0]][startXY[1]];
	var x = startXY[0];
	var y = startXY[1];
	// console.log(start);
	for(var i=0;i<canvas2D.length;i++) {
		for(var j=0;j<canvas2D[i].length;j++){
			var temp = canvas2D[i][j];
			if(temp)
			console.log("canvas2D["+i+"]["+j+"]"+ canvas2D[i][j]);
		}
	}
	return 0;
}
// console.log(floodFill(twoDimArry,startXY,1));

function rFloodFill(start, matrix, char) {
	// Converting [x,y] coords into valid matrix point results in bugs
	// This is due to running the conversion for every recursive call
	var x = start[0];
	var y = start[1];
	// Set curVal to the value at the given coordinates
	var curVal = matrix[x][y];
	// Overwrite that value with the target value
	console.log(matrix);
	matrix[x][y] = char;
	// Recurse, checking all possible conditions and running through func
	// console.log("x", x, "y", y, "curVal", curVal, "char", char);
	if(x + 1 < matrix.length && matrix[x + 1][y] == curVal) {
		// console.log("x + 1:", matrix[x + 1][y]);
		rFloodFill([x + 1, y], matrix, char);
	}
	if(x - 1 >= 0 && matrix[x - 1][y] == curVal) {
		// console.log("x - 1:", matrix[x - 1][y]);
		rFloodFill([x - 1, y], matrix, char);
	}
	if(y + 1 < matrix[0].length && matrix[x][y + 1] == curVal) {
		// console.log("y + 1:", matrix[x][y + 1]);
		rFloodFill([x, y + 1], matrix, char);
	}
	if(y - 1 >= 0 && matrix[x][y - 1] == curVal) {
		// console.log("y - 1:", matrix[x][y - 1]);
		rFloodFill([x, y - 1], matrix, char);
	}
	// Return at the end to break out of the function
	return matrix;
}

console.log(rFloodFill([2,2], twoDimArry, 1));
