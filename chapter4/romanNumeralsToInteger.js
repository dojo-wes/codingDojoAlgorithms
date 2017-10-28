//Page 51
//Given a string of roman numerals, return its corresponding integer value.
//Integer to string of roman numerals.


function romanToInt(str) {
	var result = {
		'M':0,
		'D':0,
		'C':0,
		'L':0,
		'X':0,
		'V':0,
		'I':0,
	}

	var romannumkey = {
		'M':1000,
		'D':500,
		'C':100,
		'L':50,
		'X':10,
		'V':5,
		'I':1,
	}

	var rkey = ['M', 'D', 'C', 'L', 'X', 'V', 'I']

	str1 = 'LIV'; //54 - IF I is NOT directly before another I, it's subtracted instead of added.
	str2 = 'IX';
	str3 = 'VII';
	str4 = 'XLIX'; //If value of index i is less than index i+1, subtract instead of add.
	
	var intresult = 0;
	for (var i = 0; i < str.length; i++) {
		if (romannumkey[str[i]] < romannumkey[str[i+1]]) {
			intresult -= romannumkey[str[i]];
		} else {
			intresult += romannumkey[str[i]];
		}
	}
	return intresult;
}

console.log(romanToInt(str1));
console.log(romanToInt(str2));
console.log(romanToInt(str3));
console.log(romanToInt(str4));