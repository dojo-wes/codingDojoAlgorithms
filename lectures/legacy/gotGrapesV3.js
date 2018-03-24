function gotGrapes(arr, idx = -2, currTotal = 0) {
	var temp1 = 0;
	var temp2 = 0;
	if (arr[idx + 2] !== undefined) {
		temp1 = gotGrapes(arr, idx + 2, currTotal + arr[idx + 2]);
	} else {
		return currTotal;
	}
	if(arr[idx + 3] !== undefined) {
		temp2 = gotGrapes(arr, idx + 3, currTotal + arr[idx + 3]);
	}
	if(temp1 > temp2) {
		return temp1;
	} else {
		return temp2;
	}
}


var test = {
	0: [5, 3, 2],
	1: [10, 10, 75, 399, 400, 201, 93, 41, 25, 64, 20, 20, 128, 129, 39, 22],
	2: [4, 5, 8, 10, 1],
	3: [1, 2, 2, 1, 1, 1, 1, 100],
	4: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	5: [8, 4, 6, 8]
};
// var array = [5, 3, 2]; // 7
// var array = [10, 10, 75, 399, 400, 201, 93, 41, 25, 64, 20, 20, 128, 129, 39, 22]; // 886
// var array = [4, 5, 8, 10, 1]; // 15
// var array = [1, 2, 2, 1, 1, 1, 1, 100]; // 104
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 25

for (var key in test) {
	console.log(gotGrapes(test[key]));
}