var Stack = require("../chapter6/stacks.js").Stack
var Node = require("../chapter6/stackNode.js").Node

function SlinQy() {
	this.storage = new Stack();
	this.tempStorage = new Stack();
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
}

function enqueue(data) {
	var n = new Node(data);
	this.storage.push(n).show();
	return this;
}

function dequeue() {
	if(this.storage.isEmpty()) {
		console.log("this is an empty queue");
		return null;
	} else {
		while(!this.storage.isEmpty()) {
			var n = new Node(this.storage.pop());
			this.tempStorage.push(n);
		}
		console.log('tempStorage');
		this.tempStorage.show();
		console.log('storage');
		this.storage.show();

		var temp = new Node(this.tempStorage.pop());

		while(!this.tempStorage.isEmpty()) {
			var n = new Node(this.tempStorage.pop());
			this.storage.push(n);
		}
		console.log('storage');
		this.storage.show();
		console.log('tempStorage');
		this.tempStorage.show();

		console.log('temp', temp.getData());
		return temp;
	}
}

function front() {
	if(this.storage.isEmpty()) {
		return null;
	} else {
		while(!this.storage.isEmpty()) {
			var n = new Node(this.storage.pop());
			this.tempStorage.push(n);
		}

		var temp = this.tempStorage.top();

		while(!this.tempStorage.isEmpty()) {
			var n = new Node(this.tempStorage.pop());
			this.storage.push(n);
		}

		console.log(temp);
		return temp;
	}
}

var s = new SlinQy();
s.enqueue('a').enqueue('b').enqueue(0).enqueue('c').dequeue()
s.front()
s.storage.show()