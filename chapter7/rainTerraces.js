// Page 88
//[1,3,1,5,1,3,-2] should output 4

function rainTerraces(arr) {
	var sum = 0;
	var tempSum = 0;

	var lastHighIdx = 0;
	var currentMax = arr[0];

	for(var i = 1; i < arr.length; i++) {
		if(arr[i] >= currentMax){
			// console.log("i: " + i + " currentMax: " + currentMax + " arr[i]: " + arr[i]);
			currentMax = arr[i];
			sum += tempSum;
			tempSum = 0;
			lastHighIdx = i;
		} else {
			tempSum += (currentMax - arr[i]);
			// console.log(sum);
		}
	}

	// console.log("starting right buckets");

	currentMax = arr[arr.length - 1];
	tempSum = 0;

	for(var i = arr.length - 2; i >= lastHighIdx; i--) {
		if(arr[i] >= currentMax) {
			currentMax = arr[i];
			sum += tempSum;
			tempSum = 0;
		} else {
			tempSum += (currentMax - arr[i]);
		}
	}

	return sum;
}

var array1 = [1,3,1,5,1,3,-2]; //4
var array2 = [1,2,3,4,2,4]; //2
var array3 = [5,4,3,2,1,2]; //1
var array4 = [3,2,1,3,4]; //3
console.log(rainTerraces(array1));
console.log(rainTerraces(array2));
console.log(rainTerraces(array3));
console.log(rainTerraces(array4));