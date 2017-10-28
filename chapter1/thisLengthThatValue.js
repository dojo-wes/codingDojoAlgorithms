//Page 20
//Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are the same.

function thisThat(num1, num2) {
	if(num1 != num2) { //use !== for value and type
		var arr = [];
		for(var i = 0; i < num1; i++) {
			arr.push(num2);
		}
	} else {
		console.log("Jinx!");
	}
	// console.log(arr);
	// console.log(arr.length);
	return arr;
}

thisThat(9, "9");