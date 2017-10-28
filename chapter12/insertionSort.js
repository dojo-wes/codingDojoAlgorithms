function insertionSort(arr) {
	for(var i = 1; i < arr.length; i++) {
		for(var j = i; j >= 0; j--) {
			if(arr[j] < arr[j - 1]) {
				var temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			}
		}
	}
	return arr;
}

array = [5,7,3,4,2,0,9,6,1,8]
console.log(insertionSort(array))