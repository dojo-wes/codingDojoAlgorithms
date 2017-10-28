// Basically the union set minus intersect. Just a set. Want both ordered and unordered
// Do not assume sets will be given ordered. Be able to handle n sets as inputs

function symDiffOrd(arr) {
	// console.log(arr);
	var buffer = {};
	for(var set = 0; set < arr.length; set++) {
		// console.log(arr[set])
		for(var i = 0; i < arr[set].length; i++) {
			// console.log("set[i]", arr[set][i])
			if(!buffer[arr[set][i]]) {
				// console.log("not in buffer")
				buffer[arr[set][i]] = [arr[set][i], true];
			} else {
				buffer[arr[set][i]][1] = false;
			}
		}
	}
	// console.log('buffer', buffer)
	var result = [];
	for(var key in buffer) {
		// console.log(buffer[key][1], 'hi');
		if(buffer[key][1] === true) {
			result.push(buffer[key][0]);
		}
	}
	// console.log('result', result)
	result.sort(function(a,b){return a-b});
	return result;
}

console.log(symDiffOrd([[1,2,3,4,5], [6,7,8,9,5,3], [10,7]]))