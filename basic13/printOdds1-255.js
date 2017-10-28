//Page 27
//Print all odd integers from 1 to 255

function printOdds(start, end) {
	for(var i = start; i <= end; i++) {
		if(i % 2 === 1) {
			console.log(i);
		}
	}
}

printOdds(1, 255);