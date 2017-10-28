//Page 51
//Given an integer, return a string equivalent to the roman numeral value.


function intToRoman(int) {
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
	for (var i = 0; i < rkey.length-1; i++) {
		result[rkey[i]] = Math.floor(int/romannumkey[rkey[i]]);
		int = int%romannumkey[rkey[i]];
	}
	result.I = int;
	var newstring =''
	var tempstring =''
	for (var i = 0; i < rkey.length; i++) {
		if(result[rkey[i + 1]] > 3 && result[rkey[i]] > 0) {
			console.log("triggered");
			tempstring += rkey[i + 1] + rkey[i - 1];
			result[rkey[i + 1]] = 0;
		} else if (result[rkey[i]] > 3 && result[rkey[i - 1]] == 0) {
			tempstring += rkey[i] + rkey[i-1];
		} else {
			for (var x = 0; x < result[rkey[i]]; x++) {
			tempstring += rkey[i];
			}
		}
		newstring += tempstring;
		tempstring ='';
	}
	//if results of rkey[i] > 3, print one of rkey[i] before rkey[i-1];
	console.log(result);
	return newstring;
}

console.log(intToRoman(2545));
console.log(intToRoman(2549));//BUT THIS IS BROKEN STILL SO FIX IT FOR HOMEWORK BRUH.
console.log(intToRoman(2544));