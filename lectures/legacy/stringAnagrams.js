//String anagrams
// Given a string, return array where each element is a string representing a different anagram (a different sequence of the letters in that string). Example: if given "lim", return ["ilm", "iml", "lim", "lmi", "mil", "mli"]. For this challenge, you can use built in string functions such as split().
console.log();
function anagram(str) {
	var letters = str.split("");
	var results = [];
	function recurse(letters, len=letters.length) {
		if(len <= 1) {
			results.push(letters.join(""));
			return;
		}
		for(var i = 0; i < len; i++) {
			recurse(letters, len - 1);
			var j = len % 2 ? i : 0;
			// var j = i;
			var temp = letters[j];
			letters[j] = letters[len - 1];
			letters[len - 1] = temp;
		}
	}
	recurse(letters);
	return results;
}
var str = "abc";
anagramTester(str, {printResult: true});

function anagramTester(str, options={}) {
	const output = anagram(str);
	// console.log(output);
	var tests = {
		result: output,
		isCorrectLength: output.length === factorial(str.length),
		isUnique: function(arr) {
			for(var i = 0; i < arr.length; i++) {
				for(var j = i + 1; j < arr.length; j++) {
					if(arr[j] === arr[i]) {
						return false;
					}
			}
				return true;
			}
		}(output)
	}
	function logger(options) {
		var numErrors = 0;
		var messages = [];
		for(var key in tests) {
			if(!tests[key]) {
				numErrors++;
				messages.push(`test with key: "${key}" failed with result: ${tests[key]}`);
			}
		}
		if(!options.condensed) {
			if(!numErrors) {
				console.log("All tests passed!");
			} else {
				console.log(`${numErrors} tests failed...`);
				for(var message of messages) {
					console.log(message);
				}
			}
			if(options.printAll) {
				for(var key in tests) {
					console.log(`${key} --> ${tests[key]}`);
				}
			} 
			if(options.printResult) {
				console.log(tests.result);
			}
		} else {
			if(!numErrors){
				console.log("All tests passed!");
			}else if(numErrors < Object.keys(tests).length) {
				console.log("Tests passed with some errors");
			} else {
				console.log("All tests failed");
			}
		}
	};
	logger(options);
}


function factorial(num) {
	for (var i = num - 1; i > 0; i--) {
		num *= i;
	}
	return num;
}

// var arr = [1, 2];
// var temp = [arr[0], arr[1]];
// temp = [arr[1], arr[0]];
// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log(arr, temp);

// function stringAn(str) {
// 	function* permute(arr, len = arr.length) {
// 		if (len <= 1){
// 			yield arr.slice("");
// 		}
// 		else
// 			for (let i = 0; i < len; i++) {
// 				yield* permute(arr, len - 1);
// 				const j = len % 2 ? 0 : i;
// 				[arr[len - 1], arr[j]] = [arr[j], arr[len - 1]];
// 				console.log(arr, j, len);
// 			}
// 	}
// 	return Array.from(permute(str.split(""))).map(perm => perm.join(""));
// }

// console.log(stringAn("abcd"));
// var h = 4 % 2 ? 0 : false;
// console.log(h);
// var arr = ['a', 'b']
// console.log(arr.join());
// console.log(arr);
