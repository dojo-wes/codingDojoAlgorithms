class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

class SList {
    constructor() {
        this.head = undefined;

        this.addFront = function addFront(data) {
            var node = new Node(data);

            if(!this.head) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head = node;
            }

            return this;
        }

        this.display = function display() {
            var current = this.head;

            var result = ""
            while(current) {
                result += `${current.value}; `
                current = current.next;
            }
            console.log(result);
            return this;
        }
    }
}

var myList = new SList();
myList.addFront("C").addFront("B").addFront("A").display();
