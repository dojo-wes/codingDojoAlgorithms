//Page 16
//Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop
function downByFour() {
	var i = 2016;
	while(i > 0) {
		console.log(i);
		i -= 4;
	}
}

downByFour();

function downByFour2(number) {
	while(number > 0) {
		console.log(number);
		number -= 4;
	}
}

downByFour2(2016);

//solve recursively
function downByFour3(number) {
	if (number > 0) {
		console.log(number);
		number -= 4;
	} else {
		return
	}
	downByFour3(number);
}

downByFour3(2016);