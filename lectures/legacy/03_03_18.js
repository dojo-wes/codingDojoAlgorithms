// “The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:
//
// 1)      Set aside the last digit; do not include it in these calculations (until step 5);
// 2)      Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// 3)      If any results are larger than 9, subtract 9 from them;
// 4)      Add all numbers (not just our odds) together;
// 5)      Now add the last digit back in – the sum should be a multiple of 10.
//
// For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], then after step 2) it is [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple-of-10, we would instead return false.”

function isCreditCardValid(arr) {
	var lastDigit = arr[arr.length - 1];
	var sum = 0;
	arr.pop();
	for (var i = arr.length - 1; i > 0; i--) {
		if (i % 2 != 0) {
			var result = arr[i] * 2;
			if (result > 9) {
				result = result - 9;
			}
			arr[i] = result;
		}
	}
	for (var x = 0; x < arr.length; x++) {
		sum += arr[x];
	}
	sum += lastDigit;
	if (sum % 10 == 0) {
		return true;
	}
	return false;
}

// console.log(isCreditCardValid([5, 2, 2, 8, 2]));

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr ’s values to th e right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, s o that no data is lost. Operate in-place: given ([1,2,3],1) , change the array to [3,1,2] . Don’ t use built-in functions . Second: allow negative shiftBy (shift L, not R). Third: minimize memory usage. With no new array, handle arrays/ shiftBy s in the millions . Fourth: minimize the touches of each element .

function rotateArr(arr, shiftBy) {
	if(Math.abs(shiftBy) > arr.length) {
		shiftBy %= arr.length;
	}
	if(shiftBy < 0) {
		shiftBy = shiftBy + arr.length;
	}
	console.log(shiftBy);
	for(var i = 0; i < shiftBy; i++) {
		var temp = arr[arr.length - 1];
		for(var j = arr.length - 1; j > 0; j--) {
			arr[j] = arr[j - 1];
		}
		arr[0] = temp;
		console.log(arr);
	}
	console.log(arr);
	return arr;
}

var test = [1,2,3];
// rotateArr(test, -4);

// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N , return the N th-largest element, where (N-1) elements are larger. Return null if needed.

function nToLargest(arr, n) {
	bubbleSort(arr);
	return arr[arr.length - n];
}

// console.log(nToLargest([42, 1, 4, 3.14, 7], 3));
// //4
// console.log(nToLargest([250, 14, 88, 100, 5000, 6], 4));
// //100
// console.log(nToLargest([42, 5, 73, 4, 56, 3, 99, 1], 4));

function bubbleSort(arr) {
	var swapped = true;
	while(swapped) {
		swapped = false;
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	}
	console.log(arr);
	return arr;
}

var test = [42, 5, 73, 4, 56, 3, 99, 1];
// bubbleSort(test);

// Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl ayTha tF u nkyM usi c " , return "PlayThatFunkyMusic" .
function removeBlanks(str) {
	var result = "";
	for(var i = 0; i < str.length; i++) {
		if(str[i] !== " ") {
			result += str[i];
		}
	}
	return result;
}
var test = " Pl ayTha tF u nkyM usi c ";
test = removeBlanks(test);
console.log(test);