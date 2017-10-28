// Page 89

function matrixSearch(find, field) {
	for(var row = 0; row < field.length - (find.length - 1); row++) {
		for(var col = 0; col < field[row].length - (find[0].length - 1); col++) {
			console.log("row", row, "col", col);
			if(find[0][0] === field[row][col]) {//have to for loop for rows of find and cols of find
				for(var i = )
					for(var i = 1; i < find[0].length; i++) {
						if(find[0][i] !== field[row][col + i]) {
							break;
						}
					}
				if(find[1][0] === field[row + 1][col] && find[1][1] === field[row + 1][col + 1]) {
					return true;
				}
			}
		}
	}
	return false;
}

var find = [
	[78,89],
	[32,21]
]

var field = [
	[12,34,45,56],
	[98,87,76,65],
	[56,67,78,89],
	[54,43,32,21]
]

console.log(matrixSearch(find, field))