var Node = require('./listNode.js').Node;

console.log(new Node('a'))

module.exports = {
	'SList' : function() {
		this.head = null;
		this.isEmpty = isEmpty;
		this.addFront = addFront;
		this.length = length;
		this.addBack = addBack;
		this.removeFront = removeFront;
		this.removeBack = removeBack;
		this.contains = contains;
		this.show = show;
		this.removeValue = removeValue;
		this.insertAt = insertAt;
		this.removeAt = removeAt;
	}
}

function isEmpty() {
	return !this.head;
}

function addFront(data) {
	var n = new Node(data)
	if(this.isEmpty()) {
		this.head = n;
	} else {
		n.next = this.head;
		this.head = n;
	}
	return this;
}

function length() {
	var count = 0;
	if(!this.isEmpty()){
		var cur = this.head;
		while(cur) {
			count++;
			cur = cur.next;
		}
	}
	return count;
}

function addBack(data) {
	var n = new Node(data)
	if(!this.isEmpty()){
		var cur = this.head;
		while(cur.next) {
			cur = cur.next;
		}
		cur.next = n;
	} else {
		this.head = n;
	}
	return this;
}

function removeFront() {
	if(this.head) {
		var temp = this.head.next;
		this.head.next = null;
		this.head = temp;
	}
	return this;
}

function removeBack() {
	if(this.head && this.head.next) {
		var cur = this.head;
		while(cur.next.next) {
			cur = cur.next;
		}
		cur.next = null;
	} else {
		this.head = null;
	}
	return this;
}

function contains(val) {
	if(this.head) {
		var cur = this.head;
		while(cur) {
			if(cur.data === val) {
				return true;
			}
			cur = cur.next;
		}
	}
	return false;
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

function removeValue(value, int) { //optional int defines how many removals to do
	if(!int) {
		int = 1;
	}
	if(this.head) {
		var cur = this.head;
		while(cur && int > 0) {
			if(cur.next && cur.next.data == value) {
				var temp = cur.next;
				cur.next = temp.next;
				temp.next = null;
				int--;
			} else {
			cur = cur.next;
			}
		}
	}
	return this;
}

function insertAt(data, index) {
	//while, as we iterate do index--
	var n = new Node(data);
	if(!index || index < 0) {
		this.addFront(data);
	}
	else if(this.head) {
		var cur = this.head;
		index--;
		while(cur) {
			if(index > 0) {
				cur = cur.next;
				index--;
			} else {
				var temp = cur.next;
				cur.next = n;
				n.next = temp;
				break;
			}
		}
		if(index) {
			this.addBack(data);
			console.log("index larger than list: added to back");
		}
	}
	return this;
}

function removeAt(index) {
	if(index < 0) {
		index += this.length();
	}
	if(this.head) {
		var cur = this.head;
		index--;
		while(cur) {
			if(index > 0) {
				cur = cur.next;
				index --;
			} else {
				var temp = cur.next;
				cur.next = temp.next;
				temp.next = null;
				break;
			}
		}
		if(index) {
			this.removeBack();
			console.log("index larger than list: removed from back");
		}
	}
	return this;
}