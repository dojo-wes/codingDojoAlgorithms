// Create a function named divisors/Divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself)
// If the number is prime return the string '(integer) is prime'

// divisors(10) returns 5, 2

function divisors(num) {
	if(num > 10000000) {
		return "that number is way too big";
	}
	var results = [];

	for(var i = 2; i <= num/2; i++) {
		if(num % i === 0) {
			results.push(i);
		}
	}

	if(!results.length) {
		return num + " is a prime number";
	}

	// console.log(results);
	return results;
}

// console.log(divisors(9999874));


function isPrime(num) {
	for(var i = 2; i <= num/2; i++) {
		if(num % i === 0) {
			return false;
		}
	}

	return true;
}

// console.log(isPrime(55));


// Acronyms: Create a function that, given a string, returns the string's acronym (first letters only, capitalized). Given "there's no free lunch - gotta pay your way", return "TNFL-GPYW".

function acronym(string) {
	var letterArray = [];
	letterArray.push(string[0]);

	for(var i = 1; i < string.length; i++) {
		if(string[i] === " ") {
			if(/[a-zA-Z-]/.test(string[i + 1])) {
				letterArray.push(string[i + 1]);
			}
		}
	}
	// console.log(string.replace(/\w[^'\s]*/g, function stringFunction(word, index) {
	// 	console.log(word, index);
	// 	letterArray.push(word)
	// 	return word.toUpperCase()
	// }));

	var result = "";

	for(var i = 0; i < letterArray.length; i++) {
		result += letterArray[i].toUpperCase();
	}

	console.log(letterArray);
	console.log(result);
	return result;
}

acronym("there's     no free lunch - gotta pay your way")
