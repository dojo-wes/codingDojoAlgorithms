module.exports = function isChessMoveSafe(intended, queen) {
	return !(intended[0] === queen[0] || intended[1] === queen[1] || intended[0] - queen[0] === intended[1] - queen[1]);
};

// console.log(isChessMoveSafe([0,1], [3,4]));

function isChessMoveSafeArr(intended, queensArr, idx = 0) {
	// break case: if we run out of options in the queens array
	// console.log(queensArr[idx]);
	if(queensArr[idx] === undefined) {
		return true;
	}
	return (!(intended[0] === queensArr[idx][0] || intended[1] === queensArr[idx][1] || intended[0] - queensArr[idx][0] === intended[1] - queensArr[idx][1]) && (isChessMoveSafeArr(intended, queensArr, idx += 1)));
}

// return true && false
// 7,4
// console.log(isChessMoveSafeArr([7,4], [[0,0],[1,2],[2,3]]));