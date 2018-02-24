function drawCenteredStars(num) {
	var result = "";
	var spaces = (75 - num) / 2;

	for (var i = 0; i < 75; i++) {
		if (i < spaces) {
			result += " ";
		} else if (i < spaces + num) {
			result += "*";
		} else {
			result += " ";
		}
	}
	console.log(result);
	return result;
}

// console.log(drawCenteredStars(4).length);

function extractDigit(num, digitNum) {
	var numString = "" + num;
	var split = numString.split("");
	split.reverse();

	if (digitNum > split.length) {
		console.log(0);
	} else {
		console.log(split[digitNum]);
	}
}

// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1) , return 4

function extractDigit(num, digitNum) {
	var numString = "" + num;
	var split = numString.split("");
	split.reverse();

	if (digitNum > split.length) {
		console.log(0);
	} else if (digitNum < 0) {
		split.reverse();
		var arrSliced = split.slice(split.findIndex(i => i == "."));
		console.log(arrSliced[digitNum * -1]);
	} else {
		console.log(split[digitNum]);
	}
}

// extractDigit(123.45, -1);
// extractDigit(123.45, -2);
// extractDigit(1824, 2);
// extractDigit(1824, 0);
// extractDigit(1824, 7);

function extractOMatic(num, digitNum) {
	return Math.floor(num / 10**digitNum) % 10;
}

// console.log(extractOMatic(123.789, 1));

// Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, val) {
	for(var i = arr.length; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = val;
	console.log(arr);
	return arr;
}

var test = [2, 3, 4];
pushFront(test, 1);

function popFront(arr) {
	var result = arr[0];
	for(var i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	// arr.pop();
	arr.length--;
	return result;
}

popFront(test);
console.log(test);