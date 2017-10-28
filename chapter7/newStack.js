function Node(data, prev) {
	this.data = data;
	this.prev = prev;
}

function Stack() {
	this.tail = null;
	this.push = function(data) {
		this.tail = new Node(data, this.tail);
		return this;
	}
	this.pop = function() {
		if(this.tail){
			var temp = this.tail;
			this.tail = temp.prev;
			return temp.data;
		} else {
			return null;
		}
	}
	this.show = function() {
		var array = [];
		var cur = this.tail;
		while(cur) {
			array.push(cur.data);
			cur = cur.prev;
		}
		console.log("<-- [" + array.join(", ") + "]");
		return this;
	}
}

var thicknesses = [4, 2, 1, 9, 3, 4, 6, 2];

function findHeight(arr) {
	var s = new Stack();
	for(var i = 0; i < arr.length; i++) {
		s.push(arr[i]);
	}
	var temp = s.pop()
	var sum = 0;
	while(temp) {
		sum += temp;
		temp = s.pop();
	}
	return sum;
}

console.log(findHeight(thicknesses))