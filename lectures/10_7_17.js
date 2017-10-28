//fit the first value
function fitTheFirstValue(arr) {
	if(arr.length < arr[0]) {
		console.log("Too big!");
	} else if(arr.length > arr[0]) {
		console.log("Too small!");
	} else {
		console.log("Just right!");
	}
}

fitTheFirstValue([1]); // just right
fitTheFirstValue([4,3,6]); // too big
fitTheFirstValue([1, 6, 8]); // too small

// Sigma
// sigma(3) returns 6 OR 1 + 2 + 3

function sigma(num) {
	var total = 0;
	for(var i = 0; i <= num; i++) {
		total += i;
	}
	return total;
}

console.log(sigma(3));
console.log(sigma(5));
console.log("negative", sigma(-5));

pushFront
function pushFront(arr, value){
	for(var i = arr.length; i >0; i--) {
		arr[i] = arr[i-1];
	};
	arr[0] = value;
	return arr;
}
// function pushFront(value){
// 	for(var i = this.length; i >0; i--) {
// 		this[i] = this[i-1];
// 	};
// 	this[0] = value;
// 	return this;
// }

var myArr = [1,2,3];
var otherArr = [4, 5, 6];

// Array.prototype.pushFront = pushFront;

// myArr.pushFront(0);
// otherArr.pushFront(3);
pushFront(myArr, 0);
pushFront(myArr, 3);
console.log(myArr);
console.log(otherArr);

// var myObject = {
// 	key: "value",
// 	otherKey: "otherValue",
// 	functionKey: function() {
// 		console.log("calling the function in myObject");
// 	}
// }

// console.log(myObject["key"]);
// console.log(myObject.otherKey);
// console.log(myObject.functionKey());

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	sayName() {
// 		console.log(this.name);
// 		return this;
// 	}

// 	changeName(newName) {
// 		this.name = newName;
// 		return this;
// 	} 
// }

// var bird = new Animal("tweety");
// var dog = new Animal("snoopy");

// console.log(bird.name);

// bird.sayName().changeName("TWEETY").sayName();
// dog.sayName();