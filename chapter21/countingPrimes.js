const isPrime = require('./isNumberPrime');
console.log(isPrime);

function countPrimes(num) {
	let counter = 0;
	let operations = 0;
	if(num < 9) {
		for(var i = 2; i <= num; i++) {
			console.log(isPrime(i));
			const result = isPrime(i);
			operations += result[1] + 1;
			if(result[0]) {
				counter++;
			}
		}
	} else {
		counter = 4;
		for(var i = 11; i <= num; i += 2) {
			const result = isPrime(i);
			operations += result[1] + 1;
			if(result[0]) {
				counter++;
			}

			if(num % 10 === 3) {
				i += 2;
			}
		}
	}
	console.log(operations);
	return counter;
}

// console.log(isPrime(2));
console.log(countPrimes(10000000));