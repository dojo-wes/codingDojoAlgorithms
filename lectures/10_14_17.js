// recursive fibonnaci
// rFib(num) recursively compute and return nth Fibonnaci value
// rFib(0) == 0
// rFib(1) == 1
// rFib(2) == 1
// rFib(3) == 2
// rFib(4) == 3

// function rFib(num, x=0, y=1, sum=0) {
//  // x, y, sum
//  if(sum <= num) {

//  }
//  num = y;
//  y = sum;
//  rFib(num, x, y, sum)
// }

// twelve-bar blues
// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" - continuing the same sycle for each number up to 12

function twelveBarBlues() {
	for(var i = 0; i < 48; i++) {
		if(i % 4 == 0) {
			console.log((i / 4) + 1);
		} else if(i % 2 == 0) {
			console.log("boom");
		} else {
			console.log("chick");
		}
	}
}

// twelveBarBlues();

function rFib(num) {
	if (num == 0) {
		return 0;
	}
	if (num == 1) { 
		return 1; 
	}

	return rFib(num - 1) + rFib(num - 2);
}
// console.log(rFib(5));

console.log("starting iterative:", Math.floor(Date.now()));
function fibonacci(num) {
	var fib = [0, 1];
	if(num === 0) {
		return 0;
	} else if(num === 1) {
		return 1;
	} else {
		for(var i = 2; i <= num; i++) {
			fib.push(fib[i - 1] + fib[i - 2]);
		}
		console.log("ending iterative", Math.floor(Date.now()));
		return fib[i - 1];
	}
}
console.log(fibonacci(1012));


console.log("beginning recursive:", Math.floor(Date.now()));
function recurFib(n, a = 0, b = 1) {
	// a = a || 0;
	// b = b || 1;
	if(!n) {
		console.log("ending recursive", Math.floor(Date.now()));
		return a;
	}
	return recurFib(n-1, b, a + b);
}

console.log(recurFib(1012));