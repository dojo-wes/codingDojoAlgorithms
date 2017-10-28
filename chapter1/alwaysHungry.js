// Page 22
// Create a function that accepts an array and prints 
// "yummy" each time one of the values is equal to "food".
// If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
	var i = 0;
	var numFood = 0;
	while(i < arr.length) {
		if(arr[i] === "food") {
			console.log("yummy");
			numFood++;
			i++;
		} else {
			i++;
		}
	}
	if(numFood === 0) {
		console.log("I'm hungry");
	}
}

var array = ["good", "food", "food", "pizza", "help", "food", "food", "food", "food", "food"];
var array2 = ["no", "fud", "for", "you", "stay", "hungry"];
alwaysHungry(array);
alwaysHungry(array2);

//(personal challenge) Print "in my tummy" every third "food" INSTEAD of "yummy".

function alwaysHungry2(arr) {
	var i = 0;
	var numFood = 0;
	while(i < arr.length) {
		// console.log("food: " + numFood + " i: " + i); //console.log t-chart for keeping track
		if(arr[i] === "food") {
			numFood++;
			if(numFood % 3 === 0) {
				console.log("in my tummy");
			} else {
				console.log("yummy");
			}
		}
		i++;
	}
	if(numFood === 0) {
		console.log("I'm hungry");
	}
}

var array = ["good", "food", "food", "pizza", "help", "food", "food", "food", "food", "food"];
var array2 = ["no", "fud", "for", "you", "stay", "hungry"];
alwaysHungry2(array);
alwaysHungry2(array2);