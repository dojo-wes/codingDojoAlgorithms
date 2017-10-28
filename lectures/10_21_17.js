// increment the odds
var arr1 = [1,2,3,4,5,6,7,8];

function returnTheSeconds(arr) {
	for (i = 0; i < arr.length; i++) {
		if(arr[i] % 2 !== 0) {
			arr[i] += 1;
		}
	}
	return arr;
}

// console.log(returnTheSeconds(arr1));


// final countdown
function finalCountdown(lowNum, highNum, mult) {
	for (var i = highNum; i >= lowNum; i -= mult) {
		console.log(i);
	}
}
// finalCountdown(2,9,3);
var array2 = [1,4,5,"stuff"]

// create threesFives that add values from start to end if that value is evenly divisible by 3 OR 5 but NOT BOTH
function threesFives(start, end) {
	var total = 0;
	var i = start;
	while(i <= end) {
		if(!(i % 3 === 0 && i % 5 === 0) && (i % 3 === 0 || i % 5 === 0)) {
			total += i;
		}
		i++;
	}
	return total;
}

// console.log(threesFives(0, 20))

// recursive inOrderSubsets
// function strSubsets(str,x,y) {
// 	var sliceArray = str.slice(0,1);
// 	console.log(sliceArray);
// 	y = sliceArray.length;
// 	var arrLen = ((sliceArray.length) * (sliceArray.length))-1;
// 	// var subset=sliceArray[1];
// 	sliceArray.push(sliceArray[x]+sliceArray[y]);
// 	console.log(arrLen);
// 	while(!arrLen) {
// 		return(subset);
// 	}
// 	// x = sliceArray[0];
// 	// y =sliceArray[1];
// 	// var temp= "";
	
	
// 	// while(sliceArray.length > 8)
// 	// return sliceArray;
// 	// for(var i=0; i<sliceArray.length;i++) {
// 	// 	console.log(sliceArray[i]);
// 	// }
// 	// for(var i=0;i<sliceArray.length;i++) {
// 	// 	for(var j=0;j<)
// 	// }
// 	// return sliceArray(str, sliceArray.push(x+y));
// 	return strSubsets(sliceArray,arrLen-1,arrLen-2);
// }
// strSubsets("abc",0,1);

function orderedStrSubsets(str, subStr='', results=[]) {
	var letter = str.slice(0,1);
	str = str.slice(1);
	if(!letter) {
		results.push(subStr);
	} else {
		var concatenated = subStr + letter;
		orderedStrSubsets(str, concatenated, results);
		orderedStrSubsets(str, subStr, results);
	}
	return results;
}

console.log(orderedStrSubsets("abcd"));