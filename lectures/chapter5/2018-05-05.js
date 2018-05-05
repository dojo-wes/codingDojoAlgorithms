class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addFront(val) {
    const n = new Node(val);
    if(!this.head) {
      this.head = n;
    } else {
      n.next = this.head;
      this.head = n;
    }
    this.length++;
    return this;
  }

  removeFront() {
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    return this;
  }

  display(node=this.head) {
    let result = [];
    let curr = node;
    while(curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    console.log(result);
    return this;
  }

  contains(val) {
    let curr = this.head;
    while(curr) {
      if(val === curr.val) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  size() {
    let size = 0;
    let curr = this.head;
    while(curr) {
      size++;
      curr = curr.next;
    }
    return size;
  }

  findHalfPoint() {
    let half = Math.floor(this.length / 2);
    let curr = this.head;
    while(half) {
      curr = curr.next;
      half--;
    }
    return curr;
  }
}

let list = new SList();
list.addFront('B').addFront('A').addFront('C').addFront('D').display().display(list.findHalfPoint());
