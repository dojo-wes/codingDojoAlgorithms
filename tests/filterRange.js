/*Array: Filter Range
Given arr and values min and max, remove array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.*/

function filterRange(arr, min, max){
	// loop through array (first pointer)
	for(var i = 0; i < arr.length ; i++){
		// find values that match criteria
		// log pointers for debugging
		console.log("j", j, "i", i); // j should start as undefined
		if(arr[i] >= min && arr[i] <= max) {
			// log value for debugging, if this runs the if check has evaluated as truthy
			console.log('arr[i]', arr[i]);
			// loop through array from current pointer (i) to end
			for(var j = i; j < arr.length; j++) {
				// swap all values in array to the left by one index
				arr[j] = arr[j + 1];
			}
			// decrement i so it starts back where it just was
			// if we remove index 0, we can't move on to index 1,
			// we have to start again at index 0, because we replaced all values
			i--;
			console.log("i before addition", i); // addition is done automatically by for loop i++
			// subtract one from arr.length to remove the last index in the array
			console.log("before removal", arr);
			arr.length -= 1;
			console.log("after removal", arr);
		}
		// console.log(arr);
		// console.log("j", j, "i", i);
	}
	console.log(arr);
	return arr;
}


filterRange([1,2,3,4,5,6,7], 1, 3);