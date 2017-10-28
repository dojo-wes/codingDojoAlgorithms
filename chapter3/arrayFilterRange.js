// Page 40
// Alan is good at breaking secret codes. One tool is to eliminate numbers he knows are outside a certain
// specific range. Given arr and values min and max, remove array values between min and max. Work
// in-place: return the array you are given, with values in original order. No built-in array functions.

function arrayFilterRange(arr, min, max) {
	var newIndex = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > max || arr[i] < min){
			arr[newIndex] = arr[i];
			newIndex++;
		}
	}
	arr.length = newIndex;
	return arr;
}

var array = [1,2,3,4,5,6,14,12,114,0,55,1234,323,1253,12];
arrayFilterRange(array, 4, 500);