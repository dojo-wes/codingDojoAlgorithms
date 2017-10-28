// Page 28
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to
// number (inclusive). Ex: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

function sigma(num) {
	var sum = 0;
	for(var i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}

sigma(3);