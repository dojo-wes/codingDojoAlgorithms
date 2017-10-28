function asciify(string, offset = 0) {
	console.log("asciify", string,  "________________________________________________________");
	if(!offset) {	
		let num = string.charCodeAt(0);
		num <<= 8;
		for(let i = 1; i < string.length; i++) {
			if(i !== string.length - 1) {
				console.log(num | string.charCodeAt(i), (num | string.charCodeAt(i)));
				num = (num | string.charCodeAt(i));
				num <<= 8;
			} else {
			num = (num | string.charCodeAt(i));
			}
		}
		console.log("new offset", num);
		return num;
	}
	let result = [];
	for(let i = 0; i < string.length; i++) {
		result.push(string.charCodeAt(i) + offset);
	}
	console.log(result);
	return result;
}

function encodeString(str, pass) {
	pass = asciify(pass);
	console.log("passphrase", pass);
	// console.log("no offset", asciify(str));
	str = asciify(str, pass);
	// console.log("offset", str);
	return str;
}

let thing = encodeString('ABCDE', 'tacos');

function decoder(arr, offset) {
	console.log("decoder", "________________________________________________________");
	let str = '';
	while(arr.length) {
		str = String.fromCharCode((arr.pop() - offset) & 0b11111111) + str;
		console.log(arr);
		console.log("string", str);
	}
	return str;
}

function decodeString(encoded, pass) {
	console.log("decode string");
	pass = asciify(pass);
	encoded = decoder(encoded, pass);
	return encoded;
}

console.log(decodeString(thing, 'tacos'))