function Node(data) {
	this.data = data;
	this.next = null;
	this.prev = null;
	// this.sever = sever;
}

function sever() {

}

function Deque() {
	this.head = null;
	this.tail = null;
	this.pushFront = pushFront;
	this.pushBack = pushBack;
	this.popFront = popFront;
	this.popBack = popBack;
	this.front = front;
	this.back = back;
	this.show = show;
	// this.insertAt = insertAt;
	// this.removeAt = removeAt;
}

function pushFront(data) {
	var n = new Node(data);
	if(!this.head) {
		this.head = n;
		this.tail = n;
	} else {
		this.head.prev = n;
		n.next = this.head;
		this.head = n;
	}
	return this;
}

function pushBack(data) {
	var n = new Node(data);
	if(!this.head) {
		this.head = n;
		this.tail = n;
	} else {
		this.tail.next = n;
		n.prev = this.tail;
		this.tail = n;
	}
	return this;
}

function popFront() {
	if(!this.head) {
		console.log('This Deque is empty');
		return null;
	} else {
		var temp = this.head;
		this.head.next.prev = null;
		this.head = this.head.next;
		temp.next = null;
		return temp;
	}
}

function popBack() {
	if(!this.head) {
		console.log("This Deque is empty");
		return null;
	} else {
		var temp = this.tail;
		this.tail.prev.next = null;
		this.tail = this.tail.prev;
		temp.prev = null;
		return temp;
	}
}

function front() {
	if(!this.head) {
		return null;
	} else {
		return this.head.data;
	}
}

function back() {
	if(!this.head) {
		return null;
	} else {
		return this.tail.data;
	}
}

function show() {
	var array = [];
	var cur = this.head;
	while(cur) {
		array.push(cur.data);
		cur = cur.next;
	}
	console.log(array);
	return this;
}

function insertAt() {

}

function removeAt() {
	
}

var d = new Deque();
d.pushFront('b').pushFront('a').pushBack('c').show().popBack()
d.show()
console.log(d.back())
console.log(d.front())