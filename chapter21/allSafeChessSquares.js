// chessBoard = [
// 	[Q,0,0,0,0,0,0,0],
// 	[0,0,1,1,1,1,1,1],
// 	[0,1,0,1,1,1,1,1],
// 	[0,1,1,0,1,1,1,1],
// 	[0,1,1,1,0,1,1,1],
// 	[0,1,1,1,1,0,1,1],
// 	[0,1,1,1,1,1,0,1],
// 	[0,1,1,1,1,1,1,0]
// ]

const safe = require('./isChessMoveSafe');

console.log(safe);

function allSafeChessSquares(queen, result=[], curr=[0,0]) {
	console.log(result);
	
	if(curr[1] > 7) {
		curr[1] = 0;
		curr[0] += 1;
	}

	if(curr[0] > 7) {
		return result;
	}

	if(safe(curr, queen)) {
		result.push(curr);
	}

	curr[1] += 1;
	allSafeChessSquares(queen, result, curr);
}

console.log(allSafeChessSquares([0,0]));