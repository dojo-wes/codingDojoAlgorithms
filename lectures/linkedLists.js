// function Node(val) {
// 	this.val = val;
// 	this.sayHello = function() {
// 		console.log(this.val);
// 		return this;
// 	}
// }

// Node.prototype.sayWorld = function() {
// 	console.log('world');
// 	return this;
// }


// console.log(myNode.val);
// myNode.sayWorld().sayHello();

// Array.prototype.spitLength = function() {
// 	console.log('the length of this array is ' + this.length);
// 	return this;
// }
// var myArr = [1,2,3,4,5]
// myArr.spitLength()

// var myNode = new Node('hello');
// var other = new Node('world');
// console.log(myNode);
// myNode.sayHello();

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
var test = new Node();
// console.log(test);

class SList {
	constructor() {
		this.head = null;
	}

	addFront(value) {
		var n = new Node(value);
		if(this.head) {
			n.next = this.head;
		}
		this.head = n;
		return this;
	}
	
	removeFront() {
		var temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		return this;
	}
}

var list = new SList();
list.addFront("C").addFront('B').addFront('A').removeFront().removeFront();
console.log(list);
var otherList = new SList();
// otherList.addFront('Z').addFront('Y').addFront('X');

class Human {
	constructor(g, a, n, value) {
		this.gender = g;
		this.age = a;
		this.name = n;
	}
}

// var wes = new Human('male', 23, 'Wes');
// var greg = new Human('male', 28, 'Greg');
// console.log(wes, greg);
// wes.name = "Greg";
// console.log(wes);

// list = {
// 	head: {
// 		val: 'thing',
// 		next: Node
// 	}
// }