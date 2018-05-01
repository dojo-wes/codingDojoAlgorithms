class DLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(val) {
    let n = new DLNode(val);
    if(!this.head) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      n.prev = this.tail;
      this.tail = n;
    }
    return this;
  }

  prepend(val) {
    let n = new DLNode(val);
    if(!this.head) {
      this.head = n;
      this.tail = n;
    } else {
      this.head.prev = n;
      n.next = this.head;
      this.head = n;
    }
    return this;
  }

  isValid() {
    let visited = [];
    let curr = this.head;
    while(curr.next) {
      if(curr !== curr.next.prev) {
        return false;
      }
      if(visited.indexOf(curr) !== -1) {
        return false;
      }
      visited.push(curr);
      curr = curr.next;
    }
    return true;
  }
}

let list = new DLList();
list.append('B').prepend('A').append('C').append('D');
console.log(list.isValid());
list.head.prev = list.tail;
list.tail.next = list.head;
console.log(list.isValid());