function selectionSort(arr) {
	for(var i = 0; i < arr.length - 1; i++) {
		var min = arr[i];
		for(var j = i; j < arr.length; j++) {
			if(arr[j] < min) {
				min = arr[j];
				var swapIdx = j;
			}
		}
		var temp = arr[swapIdx];
		arr[swapIdx] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

array = [5,7,3,4,2,0,9,6,1,8]
console.log(selectionSort(array))