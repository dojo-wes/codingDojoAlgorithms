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
		if(!this.head) {
			this.head = n;
			this.tail = n;
		} else {
			this.tail.next = n;
			this.tail = n;
		}
		this.length++;
		return this;
	}

	dequeue() {
		if(this.head === null) {
			return null;
		}
		var temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		return temp.val;
	}

	front() {
		// return { conditional expression } ? { value if true } : { value if false }
		return this.head ? this.head.val : null;
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

	interleave() {
		// drawing diagram of initial Queue state will be extremely helpful
		// a length of less than 3 will always be 'this' anyway
		if(this.length < 3) {
			return this;
		}
		// use index to get curr to the right place to start making swaps
		var currIdx = 0;
		// keep track of which node we're on for use in while loop
		var curr = this.head;
		// temp and before are both necessary pointers to keep track of so we don't lose any nodes
		var temp;
		// before is necessary after 1st swap, but must be set to this.head for the first iteration to keep things DRY
		var before = this.head;
		while(curr.next) {
			// iterate to the halfway point, then stop iterating
			if(currIdx < (this.length - 1) / 2) {
				curr = curr.next;
				currIdx++;
			} else {
				// point at node to be moved
				temp = curr.next;
				// necessary for the last swap
				try {
					// on last iteration, curr.next.next will not exist and will throw an error
					curr.next = curr.next.next;
				} catch (error) {
					// we must do this to avoid circular referencing
					curr.next = null;
					// we can reliably use this as a marker for the last iteration to move this.tail's pointer
					this.tail = curr;
				}
				// move node (pointer swap)
				temp.next = before.next;
				before.next = temp;
				// keep track of where we moved the node to, so we know where to insert the next one
				// sort of like a reference to where we are in the first half
				before = temp.next;
			}
		}
		return this;
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
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).enqueue(6).enqueue(7).display();
q.interleave().display();