// Given a string and an array of 'naughty words', return new string with naughty
// words changed to 'x'. Given ('Snap, crackle pop nincompoop!', ['crack', 'poop']),
// return 'Snap xxxxle pop nincomxxxx!'

// Level 2 handle capitalization appropriately

function censor(str, arr) {
	var maxLen = arr[0].length;
	var minLen = arr[0].length;
	//find max and min length of words in array
	for(var arrIdx = 0; arrIdx < arr.length; arrIdx++) {
		if(arr[arrIdx].length > maxLen) {
			maxLen = arr[arrIdx].length;
		} else if(arr[arrIdx].length < minLen) {
			minLen = arr[arrIdx].length;
		}
	}
	console.log(maxLen, minLen)
	//run checks through for loop;
	while(maxLen >= minLen) {
		//check every index in array until lookahead is impossible
		for(var strIdx = 0; strIdx < str.length - maxLen; strIdx++) {
			var subStr = '';
			for(var subIdx = strIdx; subIdx < maxLen; subIdx++) {
				subStr += str[subIdx];
				console.log("subStr", subStr)
			}
			for(var i = 0; i < arr.length; i++) {
				if(subStr == arr[i]) {
					for(var i = strIdx; i < maxLen; i++) {
						str[subIdx] = 'x';
					}	
				}
			}
		}
		maxLen--;
	}
	return str;
}

console.log(censor('Snap, crackle pop nincompoop!', ['crack', 'poop', 'po']))