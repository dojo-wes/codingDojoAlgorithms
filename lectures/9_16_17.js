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

		this.length = function length() {
			// Create a function that accepts a pointer to the first node and returns the number of nodes in the SList
			if(!this.head) {
				return 0;
			}

			var curr = this.head;
			var total = 0;

			while(curr) {
				total++;
				curr = curr.next;
			}

			return total;
		}

		this.display = function display(node) {
			// Create display(node) for debugging that returns a string containing all list values
			var curr = node;
			var result = "";
			while(curr) {
				if(curr.next) {
					result += `${curr.value}, `;
				} else {
					result += curr.value;
				}
				curr = curr.next;
			}
			return result;
		}

		this.max = function max() {
			// Create function max() to return the list's largest value
			if(!this.head) {
				return "this list is empty";
			}

			var curr = this.head;
			var max = curr.value;
			curr = curr.next;
			while(curr) {
				if(curr.value > max) {
					max = curr.value;
				}
				curr = curr.next;
			}

			return max;
		}

		this.min = function min() {
			// Create function min() to return the list's smallest value
			if(!this.head) {
				return "the list is empty";
			}

			var curr = this.head;
			var min = curr.value;
			curr = curr.next;
			while(curr) {
				if(curr.value < min) {
					min = curr.value;
				}
				curr = curr.next;
			}

			return min;
		}

		this.average = function average() {
			// Create function average() to return the list's average value
			if(!this.head) {
				return "this is an empty list yo!";
			}
			var curr = this.head;
			var len = this.length();
			var avg = curr.value / len;
			curr = curr.next;

			while(curr) {
				avg += curr.value / len;
				curr = curr.next;
			}

			return avg;
		}

        this.back = function back(){
            // var resultback="";
			// var back = display(this);
			// for(i=back.length;i>0;i--) {
			// 	resultback = back[i];
	        // }
            // return resultback;
            // var len = this.length() - 1;
            var curr = this.head;
            while(curr.next) {
                curr = curr.next;
                // len--;
            }
            console.log(curr.value);
            return curr.value;
        }

        this.removeBack = function removeBack() {
            
        }

        this.addBack = function addBack() {

        }

	}
}

var list = new SList();
list.addFront("C").addFront("B").addFront("A").addFront(3);
console.log(list.display(list.head));
list.back()

var numList = new SList();
numList.addFront(1).addFront(10).addFront(15).addFront(4);
console.log(numList.average());
