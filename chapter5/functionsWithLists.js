var SList = require('./listClass.js').SList;

function removeDuplicates(head) {
	if(head.next.next) {
		var cur = head;
		while(cur) {
			var runner = cur;
			while(runner.next) {
				if(cur.data === runner.next.data) {
					var temp = runner.next;
					runner.next = runner.next.next;
					temp.next = null;
				} else {
					runner = runner.next;
				}
			}
			cur = cur.next;
		}
	}
	return head;
}

function removeDuplicates2(head) {
	var buffer = {};
	if(head.next.next) {
		var cur = head;
		buffer[cur.data] = true;
		while(cur.next) {
			if(buffer[cur.next.data]) {
				var temp = cur.next;
				cur.next = cur.next.next;
				temp.next = null;
			} else {
				buffer[cur.next.data] = true;
				cur = cur.next;
			}
		}
	}
	console.log(buffer)
	return head;
}

var myList = new SList();
myList.addFront('a').addBack('a').addBack('b').addBack('c').addBack('c').show();
removeDuplicates2(myList.head)
myList.show()