// function Node(value) {
// 	this.val = value;
// 	this.next = null;
// 	// this.enqueue = function(val) {

// 	// }
// }

// Node.prototype.enqueue = function() {

// }

// Array.prototype.first = function() {
// 	console.log(this[0]);
// }
// console.log([1, 2, 3, 4].first());

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SLQueue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	enqueue(val) {
		var n = new Node(val); 
		if(!this.head){
			this.head = n; 
			this.tail = n;
			this.length++;
			return this;
		}
		this.tail.next = n;
		this.tail = this.tail.next;
		this.length++;
		return this;
	}
	dequeue() {
		if(!this.head) {
			console.log("EMPTY QUEUE!!!!!");
			return this;
		}
		if(!this.head.next) {
			var temp = this.head;
			this.head = null;
			this.tail = null;
			this.length = 0;
			return temp;
		}
		var temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		return temp;
	}
}

var q = new SLQueue();
q.enqueue("A").enqueue("B").enqueue("C");
console.log(q);
console.log(q.dequeue());

class SLStack {
	constructor() {
		this.top = null;
		this.length = 0;
	}
	push(val) {
		var n = new Node(val);
		if (!this.top){
			this.top = n;
			this.length++;
			return this;
		}
		n.next = this.top;
		this.top = n;
		this.length++;
		return this;
	}
}