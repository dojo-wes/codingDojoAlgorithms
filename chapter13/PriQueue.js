function PQNode(data, pri) {
	this.next = null;
	this.data = data;
	this.pri = pri;
}

function PriQueue() {
	this.head = null;
}

PriQueue.prototype.push = function (data, pri) {
	var pn = new PQNode(data, pri);
	if(!this.head) {
		this.head = pn;
	} else {
		var curr = this.head;
		if(curr.pri > pn.pri) {
			pn.next = this.head;
			this.head = pn;
			return this;
		}
		while(curr.next) {
			if(curr.next.pri > pn.pri) {
				break;
			}
			curr = curr.next;
		}
		var temp = curr.next;
		curr.next = pn;
		pn.next = temp;
	}
	return this;
}

PriQueue.prototype.dequeue = function() {
	if(!this.head) {
		return null;
	}
	var temp = this.head;
	this.head = this.head.next;
	temp.next = null;
	return temp;
};

PriQueue.prototype.show = function() {
	var curr = this.head;
	while(curr) {
		console.log("data", curr.data, "pri", curr.pri);
		curr = curr.next;
	}
	return this;
}

PriQueue.prototype.sequenceMessage = function(arr) {
	this.push(arr[1], arr[0]);
	return this;
}

PriQueue.prototype.playMessages = function() {
	while(this.head) {
		while(this.head.pri <= Date.now()) {
			console.log(this.head.data);
			this.head = this.head.next;
		}
		break;
	}
	return this;
}

module.exports.PriQueue = PriQueue;
// console.log(pq);
// pq.push(3, 0).push(3, 1).push(4, 0).push(1,1).push(4,5).push(3,3).push(2,2).push(3,2).show();
// pq.sequenceMessage([Date.now(), "msg1"]);
// setTimeout(function(){ return pq.sequenceMessage([Date.now(), "msg3"]) }, 1000);
// pq.sequenceMessage([1687631408522, "msg5"]);
// setTimeout(function(){ return pq.sequenceMessage([Date.now(), "msg2"]) }, 500);
// setTimeout(function(){ return pq.sequenceMessage([Date.now(), "msg4"]) }, 2000);
// setTimeout(function(){ return pq.show(); }, 1499);
// setTimeout(function(){ return pq.playMessages() }, 1500);
// setTimeout(function(){ return pq.show(); }, 3000);