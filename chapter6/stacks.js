var Node = require('./stackNode.js').Node

module.exports.Stack = function() {
	var _head = null;
	this.push = function(data) {
		// console.log('pushing');
		// console.log(data instanceof Node);
		if (!(data instanceof Node)) {
			// console.log("inside if")
			var n = new Node(data);
			n.setNext(_head);
			_head = n;
			return this;
		} else {
			// console.log('inside else');
			// console.log(data.getData());
			data.setNext(_head);
			_head = data;
			return this;
		}
	}
	this.pop = function() { //pop from front and return the whole node that's been popped
		if(_head) {
			var temp = _head;
			_head = temp.getNext();
			temp.setNext(null);
			return temp.getData();
		}
	}
	this.top = function() { 
		if(_head) {
			return _head.getData();
		}
		return null;
	}
	this.isEmpty = function() {
		return !_head;
	}
	this.show = function() {
		var array = [];
		var cur = _head;
		while(cur) {
			array.push(cur.getData());
			cur = cur.getNext();
		}
		console.log(array);
		return this;
	}
	// this.contains = function() {}
	// this.size = function() {}
}


// var s = new Stack();

// s.push('a').push('b').push('c').show()
// console.log(s.pop())
// s.show()