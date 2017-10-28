// give all combinations of string subsets in their original order.
// given "abc" return ['', a, b, c, ab, ac, bc, abc]

//str.slice(0)

function inOrderSubsets(str, subStr='', results=[]) {
	// progress
	var letter = str.slice(0, 1);
	str = str.slice(1);
	if(!letter) {
		// break case
		results.push(subStr);
	} else {
		var add = subStr + letter;
		// recurse x2
		inOrderSubsets(str, add, results);
		inOrderSubsets(str, subStr, results);
	}
	return results;
}

console.log(inOrderSubsets('abcde'))