//Page 27
//Print integers from 0 to 255, and with each integer print the sum so far.

function printIntsAndSum(start, end) {
	var sum = 0;
	for(var i = start; i <= end; i++) {
		sum += i;
		console.log(i + " sum=" + sum);
	}
}

printIntsAndSum(0,255);