function encode(arr) {
	let result = arr[0];
	let i = 1;
	do {
		result <<= 8;
		result |= arr[i];
		i += 1;
	} while(i < arr.length);
	return result;
}

let array = [255, 171, 240, 255];
console.log(encode(array));

function decode(num) {
	let results = [];
	while(results.length < 4) {
		let temp = num & 0b11111111;
		results.splice(0, 0, temp);
		num >>>= 8;
	}
	return results;
}

console.log(decode(encode(array)));