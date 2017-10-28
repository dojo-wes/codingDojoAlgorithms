// ES5 - ECMAScript 2015
// function Node(data) {
// 	this.value = data;
// 	this.next = null;

// 	this.method = function() {
// 		console.log("I am a method");
// 	}
// }

// var myNode = new Node("A");
// console.log(myNode);
// myNode.method()

// ES6 - 2016
class Node {
	constructor(data) {
		this.value = data;
		this.next = null;
	}
}

class SList {
	constructor() {
		this.head = null;
	}

	addFront(data) {
		const node = new Node(data);
		node.next = this.head;
		this.head = node;

		return this;
	}

	removeFront() {
		if(!this.head) {
			console.log("You can't do that!");
			return this;
		}
		const oldHead = this.head;
		// define head
		// console.log(this.head.next);
		this.head = this.head.next;
		// console.log(this.head);
		// remove pointer from A
		oldHead.next = null;

		return this;
	}

	contains(val) {
		let curr = this.head;
		while(curr) {
			if(curr.value === val) {
				return true;
			}
			curr = curr.next;
		}
		return false;
	}

	front() {
		if(this.head) {
			return this.head.value;
		} 
		return null;
	}
}

var list = new SList();
list.addFront("C").addFront("B").addFront("A").removeFront().addFront("newA").removeFront().removeFront().removeFront();

console.log(list.contains("A"));
console.log(list.contains("B"));
console.log(list.front());
console.log(list);
