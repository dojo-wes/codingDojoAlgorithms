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
		this.length = 0;
	}
	addFront(data) {
		var n = new Node(data);
		n.next = this.head;
		this.head = n;
		this.length++;
		return this;
	}
	removeFront() {
		if(this.head) {
			var temp = this.head;
			this.head = this.head.next;
			temp.next = null;
		}
		this.length--;
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
	length() {
		var count = 0;
		var curr = this.head;
		while(curr) {
			count++;
			curr = curr.next;
		}
		console.log(count);
		return this;
	}
	display() {
		var result = [];
		var curr = this.head;
		while(curr) {
			result.push(curr.val);
			curr = curr.next;
		}
		console.log(result);
		return this;
	}
	addBack(data) {
		var n = new Node(data);
		if(!this.head) {
			this.head = n;
			this.length++;
			return this;
		} 
		var curr = this.head;
		while(curr.next) {
			curr = curr.next;
		}
		curr.next = n;
		this.length++;
		return this;
	}
	maxToBack() {
		if(!this.head) {
			return this.display();
		}
		var max = this.head;
		var afterMax = this.head.next;
		var beforeMax, tail = null;
		var curr = this.head;
		while(curr.next) {
			if(curr.next.val > max.val) {
				max = curr.next;
				beforeMax = curr;
				afterMax = max.next;
			}
			curr = curr.next;
		}
		tail = curr;
		beforeMax.next = afterMax;
		tail.next = max;
		max.next = null;
		return this.display();
	}

	toArr() {
		let curr = this.head;
		let result = [];
		while(curr) {
			result.push(curr.val);
			curr = curr.next;
		}
		return result;
	}

	addMultiple(arr) {
		for(let val of arr) {
			this.addBack(val);
		}
		return this;
	}
}

module.exports = SList;

// var list = new SList();
// list.display().addFront('C').display().addFront('B').display().addFront('A').display().addBack('D').display();
// var numList = new SList();
// numList.addBack(2).addBack(3).addBack(5).addBack(2).addBack(1).maxToBack();
// console.log(list.contains('C'));
// var empty = new SList();
// console.log(empty.contains('A'));
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