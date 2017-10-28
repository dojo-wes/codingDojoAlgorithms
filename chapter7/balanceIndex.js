// Page 84
// Here, a balance point is ON an index, not BETWEEN incices. Return the balace index where sums are
// equal on either side (exclude its own value). Return -1 if none exist. Ex: [-2,5,7,0,3] --> 2,
// but [9,9] --> -1.

function balanceIndex(arr) {
	var balanceIndex = 1;
	var sumLeft = arr[0];
	var sumRight = 0;
	var len = arr.length;
	
	if(arr.length === 2 || !arr) {
		balanceIndex = -1;
	} else if(arr.length == 1) {
		balanceIndex = 0;
	}

	for(var i = 2; i < len; i++){
		sumRight += arr[i];
	}

	len -= 1;

	while(balanceIndex < len) {
		if(sumLeft == sumRight) {
			break;
		} else {
			sumLeft += arr[balanceIndex];
			sumRight -= arr[balanceIndex];
			balanceIndex++;
		}
	}
	return balanceIndex;// not working because balanceIndex++
}

var array1 = [-2,5,7,0,3] //2
var array2 = [9,9] //-1
var array3 = [1, 2, 3, 4, 10] //-1
var array4 = [9, 1, 9] //1
console.log(balanceIndex(array1))
console.log(balanceIndex(array2))
console.log(balanceIndex(array3))
console.log(balanceIndex(array4))