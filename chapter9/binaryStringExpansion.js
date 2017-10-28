// Page 107
function rBSE(str, results=[]) {
	var index = str.indexOf("?");
	// console.log(index);
	if(index === -1) {
		// console.log(str);
		results.push(str);
		// console.log(results);
	}
	else {
		var left = str.slice(0, index);
		var right = str.slice(index + 1);
		var ones = left + "1" + right;
		var zeroes = left + "0" + right;
		rBSE(ones, results);
		rBSE(zeroes, results);
	}
	return results;
}

console.log(rBSE("??????"));