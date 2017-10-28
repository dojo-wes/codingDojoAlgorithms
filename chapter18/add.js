function add(bin1, bin2) {
	let result = "";
	let carry = false;
	console.log(parseInt(10001, 2));
	while(bin1 || bin2) {
		let firstBit = bin1 & 0b1;
		let secondBit = bin2 & 0b1;
		if(firstBit ^ secondBit) {
			if(carry) {
				result = "0" + result;
			} else {
				result = "1" + result;
			}
		} else if(firstBit === 0b0) {
			if(carry) {
				result = "1" + result;
				carry = false;
			} else {
				result = "0" + result;
			}
		} else {
			carry = true;
			result = "0" + result;
		}
		console.log("result:", result);
		bin1 = bin1 >>> 1;
		bin2 = bin2 >>> 1;
	}
	if(carry) {
		result = "1" + result;
	}
	// result = "0b" + result;
	result = parseInt(result, 2);
	return result;
}
// console.log(add(13, 0))

function addBin(num1, num2) {
	while(num2) {
		// remove temp variable to make subtract function. XOR doesn't work in place, it creates a new variable
		let temp = num1;
		temp = num1 ^ num2;
		// console.log("num1", num1.toString(2));
		let carry = num1 & num2;
		num2 = carry << 1;
		num1 = temp;
	}
	return num1;
}

function subtract(num1, num2) {
	return addBin(num1, -num2);
}
console.log(addBin(3, -4));
console.log(subtract(3, 4));