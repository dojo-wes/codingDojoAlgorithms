//recursive binary search
function rBinSearch(arr, val, left=0, right=arr.length-1) {
	// console.log("r", right, "l", left)
	var len = right - left;
	if(len <= 1) {
		return val === arr[left] || val === arr[right];
	} else {
		// make progress
		// find the middle
		var mid = Math.ceil(len / 2);
		mid = right - mid;
		// console.log("len", len, "mid", mid, "val", arr[mid]);
		if(val === arr[mid]) {
			return true;
		} else if(val > arr[mid]) {
			return rBinSearch(arr, val, mid, right);
		} else if(val < arr[mid]) {
			return rBinSearch(arr, val, left, mid);
		}
	}
}

var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

console.log(rBinSearch(array, 10))