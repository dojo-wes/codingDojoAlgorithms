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
	}

	enqueue(val) {
		var n = new Node(val);
		if(!this.head) {
			this.head = n;
			this.tail = n;
		} else {
			this.tail.next = n;
			this.tail = n;
		}
		return this;
	}

	dequeue() {
		if(this.head === null) {
			return null;
		}
		var temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		return temp.val;
	}

	front() {
		// return { conditional expression } ? { value if true } : { value if false }
		return this.head ? this.head.val : null;
	}
}

class User {
	constructor(first, last, email, pet) {
		this.first = first;
		this.last = last;
		this.email = email;
		this.pet = pet;
	}
}

class Pet {
	constructor(type, name) {
		this.type = type;
		this.name = name;
	}
}

var q = new SLQueue();
q.enqueue('A').enqueue('B').enqueue('C');
console.log(q);