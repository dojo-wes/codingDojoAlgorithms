function fibonacci(num) {
	// for(var i=num; i>=0; i--){
	if (num <= 1) {
		return num;
	} else {
		return fibonacci(num - 1) + fibonacci(num - 2); //How do we store these so we don't have to do it again, and again for a very high num?
	}
	// }
}
console.log(fibonacci(4));

function iterFib(num) {
	if(num <= 1) {
		return num;
	}
	var nums = [0, 1];
	for(var i = 2; i <= num; i++) {
		nums.push(nums[i - 1] + nums[i - 2]);
	}
	return nums.pop();
}
// console.log(iterFib(4));

function iterFib2(num) {
	if(num <= 1) {
		return num;
	}
	var first = 0;
	var second = 1;
	for(var i = 2; i <= num; i++) {
		var temp = first;
		first = second;
		second = second + temp;
	}
	return second;
}
console.log(iterFib2(8));

function recurFib(num, a=0, b=1) {
	if(num === 0) {
		return a;
	}
	return recurFib(num - 1, b, a+b);
}
