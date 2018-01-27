// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3 ); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5 ).


function factorial(num) {
	var product = 1;
	// for(var i = num; i > 1; i--) {
	// 	product *= i;
	// }
	while(num > 0) {
		product *= num;
		num--;
	}
	console.log(product);
	return product;
}
factorial(3); // 6
factorial(-5); // 120

function sumToOne(n) {
	var sum = 0;
	while(n > 9) {
		// make sure we grab the ones digit before truncation
		sum += Math.trunc(n / Math.pow(10, 0)) % 10;
		while(n / 10 >= 1) {
			n = Math.trunc(n / 10);
			sum += Math.trunc(n / Math.pow(10, 0)) % 10;
		}
		// console.log('sum', sum);
		n = sum;
		sum = 0;
	}
	console.log('n', n);
	return n;
}

sumToOne(928);
sumToOne(793);

