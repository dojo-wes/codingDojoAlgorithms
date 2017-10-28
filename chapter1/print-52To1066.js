//Page 16
//Print integers from -52 to 1066 using a FOR loop.

function printTo1066() {
	for(var i = -52; i <= 1066; i++) {
		console.log(i);
	}
}

printTo1066();

//Make it reusable for any start and end values

function printTo(start, end) {
	for(var i = start; i <= end; i++) {
		console.log(i);
	}
}

printTo(-52, 1066);