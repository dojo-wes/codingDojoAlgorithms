// Page 29
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American
// cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies,
// nickels, dimes, and quarters.

// Second: can you simplify/shorten your code?

// Third: add half-dollar and dollar coins with 40 additional characters or less.

function generateCoinChange(cents) {
	var qRem = cents % 25;
	var dRem = qRem % 10;
	var nRem = dRem % 5;
	var Q = Math.trunc(cents / 25);
	var D = Math.trunc(qRem / 10);
	var N = Math.trunc(dRem / 5);
	var P = nRem;
	console.log("quarters: " + Q + " dimes: " + D + " nickels: " + N + " pennies: " + P);
}

generateCoinChange(24);
generateCoinChange(94);
generateCoinChange(100);
generateCoinChange(20000000);
console.log(24 % 25);