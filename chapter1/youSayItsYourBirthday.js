//Page 16
//If 2 given numbers represent your birth month and day in either order, log "How did you know?"
//else log "Just another day..."

function birthday(num1, num2) {
	var myMonth = 6;
	var myDate = 20;
	if((num1 === myMonth && num2 === myDate) || (num1 === myDate && num2 === myMonth)) {
		console.log("How did you know?");
	} else {
		console.log("Just another day...");
	}
}

birthday(7, 6);
birthday(6, 20);
birthday(20, 6);