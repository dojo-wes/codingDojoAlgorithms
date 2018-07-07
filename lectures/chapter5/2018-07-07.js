// function SLLNode(value) {
//   this.val = value;
//   this.next = null;
//   this.display = function() {
//     console.log(this);
//   }
// }
// SLLNode.prototype.display = function() {
//   console.log(this);
// }

class SLNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SList {
  constructor() {
    this.head = null;
  }
  addFront(value) {
    let n = new SLNode(value);
    if(!this.head) {
      this.head = n;
      return this;
    }
    // point new node.next to current head
    // point head to new node
    n.next = this.head;
    this.head = n;
    return this;
  }
  removeFront() {
    if(!this.head) {
      return null;
    }
    // store head in temp variable
    const temp = this.head;
    // point head at second node
    this.head = this.head.next;
    // remove pointer from first node
    temp.next = null;
    return this.head;
  }
}


let list = new SList();
list.addFront('C').addFront("B").addFront("A");
console.log(list);
console.log(list.removeFront());
console.log(list);