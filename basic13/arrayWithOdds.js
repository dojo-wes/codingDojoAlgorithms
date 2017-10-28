// Page 27
// Create an array with all the odd integers between 1 and 255 (inclusive)

function arrayWithOdds(start, end) {
	var array = [];
	for(var i = start; i <= end; i++) {
		if(i % 2 === 1) {
			array.push(i);
		}
	}
	console.log(array);
}

arrayWithOdds(1, 255);


function arrayWithOdds2(start, end) {
	var array = [];
	i = end; 
	if(end % 2 == 1) {
		while(i > start) {
			array.push(i);
			i -= 2;
		}
	} else {
		while(i > start) {
			array.push(i);
			i -= 2;
		}
	}
	console.log(array);
}

arrayWithOdds2()