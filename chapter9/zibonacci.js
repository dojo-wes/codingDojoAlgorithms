// Page 103

// zibonacci of 0 returns 1
// 1 returns 1
// 2 returns 2
// 2n + 1(any odd number) returns zib(n) + zib(n - 1) + 1
// 2n = zib(n) + zib(n + 1) + 1

function rZib(num) {
	if(num === 0 || num === 1) {
		return 1;
	} else if(num === 2) {
		return 2;
	} else if(num % 2 === 0) {
		num /= 2
		return rZib(num) + rZib(num + 1) + 1;
	} else {
		num -= 1
		num /= 2
		return rZib(num) + rZib(num - 1) + 1;
	}
}

console.log(rZib(120000000))