// Page 29
// Create a function messyMath(num) that will return the following sum: add all the integers from 0 up to the
// given num, except for the following special cases of our count value.
// 	1. If current count(not num) is evenly divisible by 3, don't add to sum; skip to the next count;
// 	2. Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;
// 	3. Regardless of the above, if current count is exactly 1/3 of num, return -1 immediately.

// For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.

function messyMath(num) {
	var sum = 0;
	for(var count = 0; count <= num; count++) {
		// console.log("sum: " + sum + " %3: " + count % 3 + " %7: " + count % 7);
		if(count * 3 === num) {
			return -1;
		} else if(count % 3 === 0) {
			continue;
		} else if(count % 7 === 0) {
			sum += count * 2;
		} else {
			sum += count;
		}
	}
	return sum;
}

console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));