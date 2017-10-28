// Page 108

// Get an int and return all permutations of that number of brace pairings
// 1 returns ()
// 2 returns [(()), ()()]

function validBraces(init, subStr='', opensRem=init, closesRem=init, results=[]) {
	if(opensRem == 0 && closesRem == 0) {
		results.push(subStr);
	} else if(opensRem >= closesRem) {
		subStr += "(";
		// console.log("opens", opensRem, "closesRem", closesRem)
		opensRem--;
		validBraces(init, subStr, opensRem, closesRem, results);
	} else if(opensRem > 0) {
		var opens = subStr + "(";
		var closes = subStr + ")";
		opensRem--;
		validBraces(init, opens, opensRem, closesRem, results);
		opensRem++;
		closesRem--;
		validBraces(init, closes, opensRem, closesRem, results);
	} else if(closesRem > 0) {
		subStr += ")";
		closesRem--;
		validBraces(init, subStr, opensRem, closesRem, results);
	}
	return results
}

console.log(validBraces(4))