//Page 86
//given[1,2,3,4,3,2,1] return [1,2,3,4]
//4 constraints are stable, in-place, eliminate an inner-loop, and no buffer

//doing a remove dup from a sorted array in n time may be a good intro to pointers
//if tracking an insertAt index, can do in place operations
function removeDuplicates(arr) {
	var buffer = {};
	var insertAt = 0;
	for(var i = 0; i < arr.length; i++) {
		if(!buffer[arr[i]]) {
			buffer[arr[i]] = true;
			insertAt++;
		}
	}
	arr.length -= (arr.length - insertAt)
	return arr;
}

var array = [0,0,1,1,1,2,3,4,5,5,6,6,6,7,8,9,9,9]
console.log(removeDuplicates(array))