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

  contains(val) {
    if(!this.head) {
      return false;
    }

    let curr = this.head;
    while(curr) {
      if(curr.val === val) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  front() {
    return this.head;
  }

  display() {
    // build an array with all the values in the ll in order
    // print the array
    // return the list (this)
    let result = [];
    if(!this.head) {
      console.log(result);
      return this;
    }

    let curr = this.head;
    while(curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    console.log(result);
    return this;
  }
}

let list = new SList();
let other = new SList();
console.log('other:', other, '\n', 'list:', list);
list.addFront('C').addFront("B").display().addFront("A").display();