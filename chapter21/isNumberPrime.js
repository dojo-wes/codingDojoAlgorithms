module.exports = function isPrime(num) {
	var count = 3;

	if(num === 2 || num === 5) {
		return [true, count];
	}

	if(num % 10 === 5 || num % 2 === 0 || num === 4) {
		// console.log(count);
		return [false, count];
	}


	for(var i = 3; i <= Math.sqrt(num); i += 2) {
		count ++;
		// console.log(count);
		if(num % i === 0) {
			return [false, count];
		}
		if(i % 10 === 3) {
			i += 2;
		}
	}

	// console.log(count);
	return [true, count];
};

// console.log(isPrime(32416190071));
// console.log(Math.sqrt(32416190071));