function bubble(arr) {
	var unsorted = true;
	while(unsorted) {
		unsorted = false;
		for(var i = 0; i < arr.length - 1; i++) {
			if(arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				unsorted = true;
			}
		}
	}
	return arr;
}

array = [5,7,3,4,2,0,9,6,1,8]
console.log(bubble(array))