// Page 101
// Given x,y coordinates for a target value, every value that is adjacent to that
// value and shares the same value will change to new value, cascading through
// continually adjacent blocks(no diagonal adjacency)
function rFloodFill(start, matrix, char) {
	// Converting [x,y] coords into valid matrix point results in bugs
	// This is due to running the conversion for every recursive call
	var x = start[0];
	var y = start[1];
	// Set curVal to the value at the given coordinates
	var curVal = matrix[x][y]
	// Overwrite that value with the target value
	matrix[x][y] = char
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


var mat = [
	[1,2,2],
	[1,2,3],
	[4,2,2]
];

var start = [1,1];
console.log(rFloodFill(start, mat, 0))