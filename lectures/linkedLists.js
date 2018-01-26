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
		this.length = 0;
	}

	addFront(value) {
		var n = new Node(value);
		if (this.head) {
			n.next = this.head;
		}
		this.head = n;
		this.length++;
		return this;
	}

	removeFront() {
		var temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		return this;
	}

	firstValue() {
		if (!this.head) {
			return null;
		}
		var curr = this.head;
		// look through list
		while (curr.next != null) {
			curr = curr.next;
		}
		return curr.val;
	}

	front() {
		return this.head.val;
	}

	//function to check if given value is in list
	contains(searchVal) {
		if (this.head == null) {
			return null;
		}
		//fast exit check
		var curr = this.head;
		while (curr != null) {
			//console.log('curr val:', curr.val, 'search val:', searchVal);
			if (curr.val == searchVal) {
				return true;
			} else {
				curr = curr.next;
			}
		}
		return false;
	}

	getLength() {
		if (!this.head) {
			return 0;
		}
		
		var count = 1;
		var curr = this.head;
		while(curr.next) {
			count++;
			curr = curr.next;
		}
		console.log(count);
		return this;
	}

	display() {
		var result = [];
		var curr = this.head;
		while(curr){
			result.push(curr.val);
			curr = curr.next;
		}
		console.log(result);
		return this;
	}
}

var list = new SList();
list.addFront("C")
	.display()
	.addFront({
		something: 'string', 
		otherThing: 22, 
		anotherThing: [2,3,4]
	})
	.display()
	.addFront('A')
	.display();


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