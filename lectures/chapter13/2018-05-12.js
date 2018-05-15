class PQNode {
  constructor(val, pri) {
    this.val = val;
    this.pri = pri;
    this.next = null;
  }
}

class PQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val, pri) {
    const n = new PQNode(val, pri);
    if(!this.head) {
      this.head = n;
      this.tail = n;
      return this;
    }
    if(n.pri < this.head.pri) {
      n.next = this.head;
      this.head = n;
      return this;
    }
    if(n.pri >= this.tail.pri) {
      this.tail.next = n;
      this.tail = n;
      return this;
    }
    let curr = this.head;
    while(curr.next) {
      if(curr.next.pri <= n.pri) {
        curr = curr.next;
      } else {
        //insert
        n.next = curr.next;
        curr.next = n;
      }
    }
    return this;
  }

  dequeue(pri = 0) {
    if(!this.head) {
      return null;
    }
    if(this.head.pri === pri) {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      return temp;
    }
    let curr = this.head;
    while(curr.next) {
      if(curr.next.pri === pri) {
        let temp = curr.next;
        curr.next = temp.next;
        temp.next = null;
        if(temp === this.tail) {
          this.tail = curr;
        }
        return temp;
      }
      curr = curr.next;
    }
    return undefined;
  }
}

let pq = new PQueue();
pq.push('B', 2).push('A', 1).push('C', 2).push('D', 3);
// console.log(pq.dequeue(3));
// console.log(pq.dequeue(1));
// console.log(pq);

class MinHeap {
  constructor(arr=[]) {
    const temp = arr[0];
    arr[0] = 'thing';
    if(temp !== undefined) {
      arr.push(temp);
    }

    function build(arr, idx=1) {
      if(arr[idx * 2] === undefined) {
        return arr[idx];
      }
      
      const left = build(arr, idx * 2);
      const right = build(arr, idx * 2 + 1);
      const swapIdx = left < right ? idx * 2 : idx * 2 + 1;
      if(arr[swapIdx] < arr[idx]) {
        let temp = arr[swapIdx];
        arr[swapIdx] = arr[idx];
        arr[idx] = temp;
        build(arr, swapIdx);
      }
      return arr[idx];
    }

    build(arr);
    this.heap = arr;
  }

  isValid() {
    for(let i = 1; i < this.heap.length; i++) {
      if(this.heap[i * 2] !== undefined && this.heap[i * 2 + 1] !== undefined) {
        if(this.heap[i * 2] < this.heap[i] || this.heap[i * 2 + 1] < this.heap[i]) {
          console.log(this.heap[i], this.heap[i * 2], this.heap[i * 2 + 1], i);
          return false;
        }
      }
    }
    return true;
  }
}

module.exports = {
  MinHeap
}