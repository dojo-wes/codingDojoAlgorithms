var myNum = "42";
var myName = "Nicci";

// var temp = myName;
// myName = myNum;
// myNum = temp;
// console.log("myName", myName);
// console.log("myNum", myNum);

// Print all integer multiples of 5, from 512 to 4096.
// Afterward, also log how many there were
var count = 0;
for(var i = 512; i < 4097; i++) {
	if(i % 5 === 0) {
		// console.log(i);
		// count = count + 1;
		count += 1;
		// count++;
	}
}
// console.log(count);

function findMultiplesInRange(start, end, mult) {
	var count = 0;
	for(var i = start; i < end + 1; i++) {
		if(i % mult === 0) {
			console.log(i);
			count += 1;
		}
	}
	console.log(count);
}
// findMultiplesInRange(200, 1900, 14);

function swap(value1, value2) {
	var temp = value1;
	value1 = value2;
	value2 = temp;
	console.log("value1", value1);
	console.log("value2", value2);
}
// swap(myNum, myName);

function multiplesInRangeWhile(start, end, multiple) {
	while(start <= end) {
		if(start % multiple === 0) {
			console.log(start);
		}
		start++;
	}
}
// multiplesInRangeWhile(6, 6000, 6);

// Create beCheerful(). Within it, console.log("good morning!"). Call it 98 times.
function beCheerful() {
	console.log("good morning!");
}

// for(var i = 1; i <= 98; i++) {
// 	beCheerful();
// }

// Print integers 1 to 100. If divisible by 5, print "Coding". INSTEAD if divisible by 10, also print "Dojo"
// if, else if, else
// Loop (for)
for(var i = 1; i <= 100; i++) {
	if(i % 5 === 0) {
		console.log("Coding");
		if(i % 10 === 0) {
			console.log("Coding Dojo");
		} 
	} else {
		console.log(i);
	}
}