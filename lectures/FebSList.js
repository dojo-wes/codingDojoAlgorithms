// function Node(value) {
// 	this.val = value;
// 	this.next = null;
// }

// var myNode = new Node('A');
// myNode.val = 'B';
// console.log(myNode);

class Node {
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

class SList {
	constructor() {
		this.head = null;
	}
	addFront(data) {
		var n = new Node(data);
		n.next = this.head;
		this.head = n;
		return this;
	}
	removeFront() {
		if(this.head) {
			var temp = this.head;
			this.head = this.head.next;
			temp.next = null;
		}
		return this;
	}
	contains(data) {
		var curr = this.head;
		while(curr) {
			if(curr.val === data) {
				return true;
			}
			curr = curr.next;
		}
		return false;
	}
}

var list = new SList();
list.addFront('C').addFront('B').addFront('A');
console.log(list.contains('C'));
var empty = new SList();
console.log(empty.contains('A'));
// class Person {
// 	constructor(first, last) {
// 		this.first = first;
// 		this.last = last;
// 	}
// 	sayName() {
// 		console.log(this.first, this.last);
// 	}
// }

// var wes = new Person('wes', 'harper');
// var greg = new Person('greg', 'weber');
// var shannon = new Person('shannon', 'steen');

// wes.sayName();
// greg.sayName();