

function flexibleCountdown(lowNum, highNum, mult) {
	for(var i = highNum; i >= lowNum; i--) {
		if(i % mult === 0) {
			console.log(i);
		}
	}
}

// flexibleCountdown(2, 9, 3);

function theFinalCountdown(param1, param2, param3, param4) {
	while(param2 <= param3) {
		if(param2 % param1 === 0) {
			if(param2 === param4) {
				param2++;
				continue;
			}
			console.log(param2);
		}
		param2++;
	}
}

function theFinalCountdown2(param1, param2, param3, param4) {
	while(param2 <= param3) {
		if(param2 === param4) {
			param2++;
			continue;
		}
		if(param2 % param1 === 0) {
			console.log(param2);
		}
		param2++;
	}
}

function theFinalCountdown3(param1, param2, param3, param4) {
	while(param2 <= param3) {
		if(param2 === param4) {
		} else if(param2 % param1 === 0) {
			console.log(param2);
		}
		param2++;
	}
}

function theFinalCountdown4(param1, param2, param3, param4) {
	while(param2 <= param3) {
		if(param2 % param1 === 0 && param2 !== param4) {
			console.log(param2);
		}
		param2++;
	}
}

function theFinalCountdown5(param1, param2, param3, param4) {
	if(param2 > param3) {
		var temp = param2;
		param2 = param3;
		param3 = temp;
	}
	while(param2 <= param3) {
		if(param2 % param1 === 0 && param2 !== param4) {
			console.log(param2);
		}
		param2++;
	}
}

// theFinalCountdown(3, 2, 12, 6);
// theFinalCountdown2(4, 2, 16, 8);
// theFinalCountdown3(4, 2, 16, 8);
// theFinalCountdown4(5, 2, 25, 15);
// theFinalCountdown5(5, 25, 2, 15);

function countdown(num) {
	var arr = [];
	for(var i = num; i >= 0; i--) {
		arr.push(i);
	}
	// console.log(arr.length);
	return arr;
}

var returnedValue = countdown(8);
// console.log(returnedValue);
// console.log("logging function directly", countdown(8));

function printAndReturn(array) {
	console.log(array[0]);
	return array[1];
}

var myArr = [14, 25];
var arr2 = [30, 60];
// printAndReturn(arr2);
// var returnedVal = printAndReturn(myArr);
// console.log(returnedVal);
