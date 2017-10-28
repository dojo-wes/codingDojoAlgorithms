//BONUS, not in book
//rotate a matrix 90 degrees to its right
/* Given [
	[1,2,3],
	[4,5,6],
	[7,8,9]
	]
return [
	[7,4,1],
	[8,5,2],
	[9,6,3]
]*/
//will always be rectangular matrix, no constraints
//lvl 2 == in place

function rotateMatrix(matrix, numRotations = 1) {
	numRotations = numRotations % 4;
	var result=[];
	var height = matrix.length;
	var width = matrix[0].length;

	for(var i = 0; i < width; i++) {
		result.push([]);
	}

	while(numRotations) {	
		for(var row = height - 1; row >= 0; row--) {
			for(var column = 0; column < width; column++) {
				console.log("column: " + column + " row: " + row + " result[" + column + "][" + ((height - 1) - row) + "] = matrix[" + row + "][" + column + "]"+ "==" + matrix[row][column])
				result[column][(height - 1) - row] = matrix[row][column];
			}
		}

		matrix = [];
		for(var i = 0; i < result.length; i++) {
			matrix.push(result[i]);
		}

		height = matrix.length;
		width = matrix[0].length;
		
		var result=[];
		for(var i = 0; i < width; i++) {
			result.push([]);
		}

		numRotations--;
		console.log(numRotations + " rotations remaining, current result: ", matrix);
	}
	return matrix;
}

array = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[10,11,12]
]

console.log(rotateMatrix(array, 10))