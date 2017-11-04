//recursive list length
// import SList from "9_9_17";
// import Node from "9_9_17";

// console.log(SList); 

//got any grapes
//Martin loves grapes. He sees a number of baggies containing grapes, all in a row. Stephen tells him that he can take as many of the baggies as he wants, as long as he doesn't take two that are next to each other. Martin wants to maximize his number of grapes. Grapes are pretty healthy, so let's help him out. Create a function to accept an array of non-negative integers representing number of grapes in each adjacent baggy. Your function should return the maximum amount of grapes he can obtain.

function gotGrapes(arr, idx=0, currTotal=0, result=[]) {
	if(idx == 0) {
		currTotal = arr[0];
	}
	if(idx <= arr.length - 1 && idx + 2 !== undefined && idx + 3 !== undefined) {
		result.push(currTotal);
		gotGrapes(arr, idx + 2, currTotal + arr[idx + 2], result);
		gotGrapes(arr, idx + 3, currTotal + arr[idx + 3], result);
		// currTotal = arr[1];
		// idx = 1;
		// result.push(currTotal);
		// gotGrapes(arr, idx + 2, currTotal + arr[idx + 2], result);
		// gotGrapes(arr, idx + 3, currTotal + arr[idx + 3], result);
	}
	console.log(result);
	return getMax(result);
};

function getMax(array) {
	var max = array[0];
	for(var i = 0; i < array.length; i++) {
		if(array[i] > max) {
			max = array[i];
		}
	}
	return max;
}

var array1 = [5, 3, 2]; // 7
var array2 = [10, 10, 75, 399, 400, 201, 93, 41, 25, 64, 20, 20, 128, 129, 39, 22];
var array3 = [4, 5, 8, 10, 1]; // 15
var array4 = [1, 2, 2, 1, 1, 1, 1, 100]; // 104
var array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 25

console.log(gotGrapes(array3));