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
			var temp = letters[i];
			letters[i] = letters[len - 1];
			letters[len - 1] = temp;
		}
	}
	recurse(letters);
	return results;
}
var str = "abcd";
anagramTester(str);

function anagramTester(str) {
	const output = anagram(str);
	// console.log(output);
	var tests = {
		result: output,
		correctLength: output.length === factorial(str.length),
		unique: function(arr) {
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
	console.log(tests);
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
