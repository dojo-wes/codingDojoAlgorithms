//Page 20
//For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function greaterThanSecond(arr) {
	var count = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[1]) {
			console.log(arr[i]);
			count++;
		}
	}
	return count;
}

var array = [1,3,5,7,9,13];
greaterThanSecond(array);