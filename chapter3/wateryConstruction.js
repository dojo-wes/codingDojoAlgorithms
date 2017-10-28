// Class Example, no page
// Given an array, equal to the skyline from "Skyline Heights" (pg 40), ex. [2,1,3,5,4,6,1]. If these buildings are
// all water sealed together, and it rains so much that it fills in the space between the buildings, how much
// water would you have? 

function wateryConstruction(arr){
	var sum = 0;
	for(var i = 1; i < arr.length - 1; i++){
		if(arr[i - 1] > arr[i] && arr[i + 1] > arr[i]){
			if(arr[i - 1] < arr[i + 1]){
				sum += arr[i - 1] - arr[i];
			} else {
				sum += arr[i + 1] - arr[i];
			}
		}
	}
	return sum;
}

//What if there are multiple "buckets" between buildings? [6,9,7,10,7,5,4,13,11,4,10,15,3,9]

//Must calc tallest, if more than one tallest, count number of tallest and only run last for loop for last tallest

function waterCon(arr){
	var sum = 0;
	var tempSum = 0;

	var lastPeak = 0;
	var currentMax = arr[0];

	for(var i = 1; i < arr.length; i++) {
		// console.log("i: " + i + " currentMax: " + currentMax + " arr[i]: " + arr[i]);
		if(arr[i] >= currentMax) {
			currentMax = arr[i];
			sum += tempSum;
			tempSum = 0;
			lastPeak = i;
		} else {
			tempSum += (currentMax - arr[i]);
			// console.log(sum);
		}
	}

	// console.log("compute right buckets");

	currentMax = arr[arr.length - 1];
	tempSum = 0;

	for(var i = arr.length - 2; i >= lastPeak; i--) {
		// console.log("i: " + i + " currentMax: " + currentMax + " arr[i]: " + arr[i])
		if(arr[i] >= currentMax) {
			currentMax = arr[i];
			sum += tempSum;
			tempSum = 0;
		} 
		else {
			tempSum += (currentMax - arr[i]);
			// console.log(sum);
		}
	}
	return sum;
}

var array = [6,9,7,10,7,5,4,13,11,4,10,15,3,9]; //should evaluate to 36
var array2 = [6,9,7,8,7,5,4,13,11,4,10,15,3,9]; //should evaluate to 34
var array3 = [6,9,7,10,7,5,4,13,11,4,10,2,3,9]; //should evaluate to 35
var array4 = [6,9,7,10,7,5,4,13,11,4,10,15,3,1]; //should evaluate to 30
var array5 = [6,9,7,10,7,5,4,13,11,4,10,13,3,1]; //should evaluate to 30, 2 equal high points

console.log(waterCon(array));
console.log(waterCon(array2));
console.log(waterCon(array3));
console.log(waterCon(array4));
console.log(waterCon(array5));