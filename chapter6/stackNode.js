module.exports.Node = function(data) {
	var _data = data; //hides data because var _data is locally scoped, it only exists inside the function
	var _next = null;
	this.getData = function() {
		return _data;
	}
	this.setNext = function(next) {
		_next = next;
		return this;
	}
	this.getNext = function() {
		return _next;
	}
}
