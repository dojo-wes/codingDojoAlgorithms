// Page 86
// For [1, [2,3], [], [4,5]] return [1,2,3,4,5]
// Level 4 difficulty, do in place, stably, with n number of m dimensional arrays
function rFlatten(arr, idx=0){
	if(arr[idx] !== null || arr[idx] !== undefined) {
		idx++;
	} else if(arr[idx] instanceof Array) {
		return rFlatten(arr[idx]);
		while(arr[idx] instanceof Array) {
			var val = arr.pop(arr[idx]);
			for(var i = arr.length; i > idx; i--) {
				arr[i] = arr[i - 1];
			}
		}
	} else {
		for(var i = idx; i < arr.length; i++) {
			arr[idx] = arr[idx + 1];
		}
		arr.length - 1;
	}
}

console.log