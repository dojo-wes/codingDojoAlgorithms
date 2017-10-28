// Page 116
var Queue = require("../chapter6/queues.js").Queue


function encode(str) {
	// instantiate a new Queue as a buffer
	var buffer = new Queue();
	// start a count var for counting the number of instances of a letter
	var count = 1;
	// loop through string once
	for(var i = 0; i < str.length; i++) {
		// if chars match, add to the count
		if(str[i] == str[i + 1]) {
			count += 1;
		} else {
			// once chars don't match, check to see if the count is <=2
			if(count <= 2) {
				// if encoded sub len is >= to sub len, use raw sub
				var sub = ''
				// build raw sub
				for(var j = 0; j < count; j++) {
					sub += str[i];
				}
				// add to queue and reset count
				buffer.enqueue(sub);
				count = 1;
			} else {
				// add to queue and reset count
				buffer.enqueue(str[i] + count);
				count = 1;
			}
		}
	}
	// show buffer for debugging
	buffer.show();
	// initialize new string to build on
	var newStr = '';
	// dequeue stack into new string
	while(buffer.front()) {
		newStr += buffer.dequeue().data;
	}
	return newStr;
}

var string1 = "aaaabbeefffffkkllcddd"
console.log(encode(string1))