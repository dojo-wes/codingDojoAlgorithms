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
	isEmpty(){
		// if(!this.head){
		// 	return true;
		// }
		// return false;
		// return !this.head ? false : true;
		return !this.head;
	}
	interleave() {
		// fast fail, if there are less than 3 nodes, interleave doesn't make sense
		if(this.length < 3) {
			return this;
		}
		var curr = this.head;
		// floor half because we want the node before our target and we're setting curr = curr.next at the end of our loop
		// half helps us find the halfway point in our list
		var half = this.length % 2 === 0 ? (this.length / 2) - 1 : Math.floor(this.length / 2);
		while(half) {
			curr = curr.next;
			half--;
		}
		// setup all the necessary pointers so we don't lose any of our nodes
		var target = curr;
		var after = target.next;
		curr = this.head;
		// whiteboards are great
		// target.next is the one we're going to move
		while(target.next) {
			target.next = after.next;
			after.next = curr.next;
			curr.next = after;
			curr = curr.next.next;
			after = target.next;
		}
		// don't forget the tail!
		this.tail = target;
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
}

function compareQueues(q1, q2) {
	if(q1.length !== q2.length){
		return false;
	}
	var current1 = q1.head;
	var current2 = q2.head;
	while(current1){
		if(current1.val !== current2.val){
			return false;
		}
		current1 = current1.next;
		current2 = current2.next;
	}
	return true;
}

var q = new SLQueue();
q
	.enqueue(1)
	.enqueue(2)
	.enqueue(3)
	.enqueue(4)
	.enqueue(5)
	.enqueue(6)
	.interleave()
	.display();
// var other = new SLQueue();
// other.enqueue("A").enqueue("B");
// console.log(compareQueues(q, other));
// console.log(q);
// console.log(q.dequeue());

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