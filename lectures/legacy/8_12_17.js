// String algorithms
// Remove Blanks: Create a function that, given a string, returns all of that string's contents, but without blanks. If given the string "  Pl    ayTha   tF   u   nkyM     usi    c     ", return "PlayThatFunkyMusic"
function removeSpaces(string) {
	var stringArray = [];
	var temp ="";
	// var arrayIdx = 0;
	for(var i=0; i<string.length; i++) {
		if(string[i] != " ") {
			// stringArray[arrayIdx] = string[i];
			// arrayIdx++;
			stringArray.push(string[i]);
		}
	}

	for(var i=0;i<stringArray.length;i++) {
		temp += stringArray[i];
	}

	return temp;
};

// console.log(removeSpaces("  Pl    ayTha   tF   u   nkyM     usi    c     "));


function removeSpaces2(string) {
	//	var stringArray =[];
	var output ="";
	for(var i=0; i < string.length; i++) {
		if(string[i] !== " ") {
			output += string[i];
		}
	}
	console.log(output);
	return output;
}

// removeSpaces2("  Pl    ayTha   tF   u   nkyM     usi    c     ");

// Array: filterRange. Given arr and values min and max, remove array values between min and max. Work in-place: return the array you are given with values in original order. No built-ins.

function filterRange(arr, min, max) {
	var delNum = 0;

	for(var outer = 0; outer < arr.length; outer ++) {
		if(arr[outer] > min && arr[outer] < max) {
			for(var inner = outer + 1; inner < arr.length; inner++) {
				arr[inner-1] = arr[inner];
			}
			outer--;
			delNum += 1;
		}
	}

	arr.length -= delNum;

	console.log(arr);
	console.log(delNum);
	return arr;
}

var myArray = [1,2,3,3,3,3,2,3,4,5,6];

// filterRange(myArray, 2, 4);

function popFront(arr) {
	var val = arr[0];
	for (var i = 1; i < arr.length; i++) {
		arr[i-1] = arr[i];
	}
	// arr.pop();
	arr.length -= 1;

	console.log(arr);
	console.log(val);
	return val;
}

// console.log(popFront(myArray));

// String: isPalindrome. Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do NOT ignore spaces, punctuation and capitalization. if given "Dud" or "oho!", return false.
function isPalindrome(palindrome) {
	// var isTrue =false;
	// var j=0;
	// var len=palindrome.length;
	// for(var i=len-1;i>0;i--) {
	// 	if(i != j) {
	// 		if(palindrome[i] == palindrome[j]) {
	// 			j++;
	// 		}
	// 	}
	//
	// }
	// console.log(Math.floor(len/2));
	// console.log(j);
	// if(Math.floor(len/2) == j) {
	// 	isTrue = true;
	// }
	//
	// console.log(isTrue);
	// return isTrue;

	for(var i = 0; i < palindrome.length / 2; i++) {
		if(palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
console.log(isPalindrome("xcxxcx"));
