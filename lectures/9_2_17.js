// Build Node class.
class Node {
	constructor(value) {
		this.value = value;
		this.next = undefined;
	}
}

// Build the SList class.
class SList {
	constructor() {
		this.head = undefined;

		this.addFront = function addFront(value) {
			var n = new Node(value);
			if(!this.head){
				this.head = n;
			} else {
				n.next = this.head;
				this.head = n;
			}
			return this;
		}

		this.removeFront = function removeFront() {
			if(this.head) {
				var temp = this.head.next;
				this.head.next = undefined;
				this.head = temp;
			}
			return this;
		}

		this.contains = function contains(value) {
			if(this.head){
				var current = this.head;
				while(current) {
					if(current.value === value) {
						return true;
					}
					current = current.next;
				}
			}
			return false;
		}

		this.front = function front() {
			if(this.head) {
				return this.head.value;
			}
			return null;
		}
	}
}

var linkedList = new SList();
linkedList.addFront("C").addFront("B").addFront("A");
console.log(linkedList);
linkedList.removeFront();
console.log(linkedList);
console.log(linkedList.contains("9"));
console.log(linkedList.front());
