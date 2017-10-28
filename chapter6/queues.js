function Node(data) {
	this.data = data;
	this.next = null;
}

module.exports.Queue = function() {
	this.head = null;
	this.tail = null;
	this.front = front;
	this.end = end;
	this.dequeue = dequeue;
	this.enqueue = enqueue;
	this.show = show;
}

function front() {
	if(!this.head) {
		return null;
	}
	return this.head.data;
}

function end() {
	if(!this.head) {
		return null;
	}
	return this.tail.data;
}

function dequeue() {
	if(!this.head) {
		return null;
	} else {
		var temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		return temp;
	}
}

function enqueue(data) {
	var n = new Node(data);
	if(!this.head) {
		this.head = n;
		this.tail = n;
	} else {	
		this.tail.next = n;
		this.tail = n;
	}
	return this;
}

function show() {
	if(!this.head) {
		return null;
	} else {
		var array = [];
		var cur = this.head;
		while(cur) {
			array.push(cur.data);
			cur = cur.next;
		}
	}
	console.log(array);
	return this;
}

// q = new Queue;
// q.enqueue('a').enqueue('b').show().dequeue();
// q.show();