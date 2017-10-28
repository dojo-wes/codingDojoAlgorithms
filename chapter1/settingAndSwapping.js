//Page 16
//Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

//change inside function local scope
var myNumber = 42;
var myName = "Wes";

function swap(val1, val2) {
	temp = val1;
	val1 = val2;
	val2 = temp;
	console.log(val1, val2)
}

swap(myNumber, myName);
console.log(myNumber, myName);

//change in global scope
function swap2() {
	temp = myNumber;
	myNumber = myName;
	myName = temp;
	console.log(myNumber, myName);
}

swap2();
console.log(myNumber, myName);