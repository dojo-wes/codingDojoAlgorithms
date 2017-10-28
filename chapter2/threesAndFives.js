// Page 29
// Create threesFives() that adds values from 100 and 4000000 (inclusive) IF that value is evenly
// divisible by 3 or 5 but not both. Display the final sum in the console.

// Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end
// values for your range. Think of threesFives() as betterThreesFives(100, 4000000).

function threesFives() {
	var sum = 0;
	for(var i = 100; i <= 4000000; i++) {
		if(i % 3 === 0 && i % 5 === 0){
			continue;
		} else if(i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	console.log(sum);
}

threesFives();

function betterThreesFives(start, end) {
	var sum = 0;
	for(var i = start; i <= end; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			continue;
		} else if(i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	console.log(sum);
}

betterThreesFives(100, 4000000);