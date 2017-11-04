// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber info and myName info.
var myNumber = 42;
var myName = "Wes";
var temp = myNumber;
myNumber = myName;
// console.log(myNumber);
myName = temp;
// console.log(myName);

// Print and Count
// Print all integer multiples of 5, from 512 to 4096.
// Afterward, also log how many there were.
// for(var i=515; i <= 4096; i+=5) {
// 	console.log(i);
// }

// for(var i=512; i <= 4096; i++) {
// 	if(i % 5 === 0) {
// 		console.log(i);
// 	}
// 	// console.log(i);
// }

function printMultiplesOf(start, end, multiple) {
	for(var i=start; i <= end; i ++) {
		if(i % multiple === 0) {
			console.log(i);
		}
	}
}

// console.log("About to run printMultiples function");
var num1 = 12;
var num2 = 200;
var num3 = 3;
// printMultiplesOf(num1, num2, num3);

// Printing Integers with While
// Print integers from 2000 to 5280 using a while loop.
var i = 2000;
while(i <= 5280) {
	console.log(i);
	i++;
	// i = i + 1;
	// i += 1;
}