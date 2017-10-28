// Page 84
// Given a customer coordinate array, return an optimal taco truck location.
// Given [[10,0], [-1,-10], [2,4]], return [2,0], as total distance is 25.

function findMaxMin(arr) {
	var x = [arr[0][0], arr[0][0]] //min left, max right
	var y = [arr[0][1], arr[0][1]] 
	for(var i = 0; i < arr.length; i++) {
		if(arr[i][0] < x[0]) {
			x[0] = arr[i][0];
		} else if(arr[i][0] > x[1]) {
			x[1] = arr[i][0];
		}
		if(arr[i][1] < y[0]) {
			y[0] = arr[i][1];
		} else if(arr[i][1] > y[1]) {
			y[1] = arr[i][1];
		}
	}
	return [x, y];
}

function findDistance(coordinate, arr) {
	var distance = 0
	for(var i = 0; i < arr.length; i++) {
		distance += Math.abs((coordinate[0] - arr[i][0])) + Math.abs((coordinate[1] - arr[i][1]));
	}
	return distance;
}

function tacoTruck(arr) {
	var temp = findMaxMin(arr);
	var minY = temp[1][0];
	var maxY = temp[1][1];
	var minX = temp[0][0];
	var maxX = temp[0][1];
	var minDist = 0;
	var minCoord = [];
	for(var y = minY; y <= maxY; y++) {
		for(var x = minX; x <= maxX; x++) {
			tempDist = findDistance([x,y], arr);
			if(!minDist) {
				minDist = tempDist;
				minCoord = [x,y];
			} else if(tempDist < minDist) {
				minDist = tempDist;
				minCoord = [x,y];
			}
		}
	}
	console.log("Distance is", minDist, "points");
	return minCoord;
}

array1 = [[10,0], [-1,-10], [2,4]];
console.log(tacoTruck(array1))