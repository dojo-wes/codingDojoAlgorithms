// Page 114 String: All Permutations
var rotate = require("./rotateString.js").rotate
// console.log(rotate("team"))

function subPerms(str, sub='', results=[]) {
	var rotated = rotate(str);
	console.log("str", str, "sub", sub)
	if(str) {		
		var letter = str.slice(0, 1);
		str = str.slice(1);
	}
	if(!letter) {
		results.push(sub);
	} else {
		var add = sub + letter;
		subPerms(rotated, add, results);
	}
	return results;
}

console.log(subPerms("team"))

function rFact(int, mult=int) {
	if(mult == 1) {
		// console.log("breaking", int);
		return int;
	} else {
		mult -= 1;
		// console.log("int", int, "mult", mult)
		int *= mult;
		return rFact(int, mult);
	}
}

// console.log(rFact(4))

function testResultNum(str, arr) {
	console.log(arr);
	var intended = rFact(str.length);
	console.log("intended", intended, "actual", arr.length);
	if(intended === arr.length) {
		return true;
	} else {
		return false;
	}
}

// console.log(testResultNum("team", subPerms("team")))