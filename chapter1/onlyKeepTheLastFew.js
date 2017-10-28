// Page 24
// Stan learned something today: that reducing an array's .length immediately shortens it by that
// amount. Given array arr and number x, remove all except the last x elements, and return arr
// (changed and shorter). Given ([2,4,6,8,10], 3), change the given array to [6,8,10] and return it.

function remAllButLastX(arr, x) {
	var temp = [];
	for(i = arr.length - x; i < arr.length; i++) {
		temp.push(arr[i]);
	}
	arr = temp;
	return arr;
}

var array = [2,4,6,8,10];
remAllButLastX(array, 2);