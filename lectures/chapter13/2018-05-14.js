const MinHeap = require('./2018-05-12').MinHeap;

MinHeap.prototype.insert = function insert(val) {
  this.heap.push(val);
  if (this.heap.length === 2) {
    return this;
  }

  let index = this.heap.length - 1;
  let parentIdx = index % 2 === 0 ? index / 2 : (index - 1) / 2;

  while (this.heap[index] < this.heap[parentIdx]) {
    let temp = this.heap[index];
    this.heap[index] = this.heap[parentIdx];
    this.heap[parentIdx] = temp;
    index = parentIdx;
    parentIdx = parentIdx % 2 === 0 ? parentIdx / 2 : (parentIdx - 1) / 2;
  }
  return this;
}

MinHeap.prototype.extract = function extract() {
  if (this.heap.length === 2) {
    return this.heap.pop();
  }
  let index = 1;
  let temp = this.heap[index];

  this.heap[index] = this.heap[this.heap.length - 1];
  this.heap[this.heap.length - 1] = temp;

  let value = this.heap.pop();
  let lower = this.heap[index * 2] < this.heap[index * 2 + 1] ? index * 2 : index * 2 + 1;

  while (this.heap[index] > this.heap[lower]) {
    let temp = this.heap[index];
    this.heap[index] = this.heap[lower];
    this.heap[lower] = temp;
    index = lower;
    lower = this.heap[index * 2] < this.heap[index * 2 + 1] ? index * 2 : index * 2 + 1;
  }

  return value;
}

function heapSort(arr){
  const result = [];
  const len = arr.length;
  let newHeap = new MinHeap(arr);
  console.log(newHeap.isValid());
  for(let idx = 0; idx < len; idx++) {
    // console.log(newHeap.heap);
    result.push(newHeap.extract());
  }
  return result;
}

function makeTestArr() {
  let arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push((Math.trunc(Math.random() * 10000)));
  }
  console.log(arr);
  return arr;
}

const myArr = makeTestArr();
let start = Date.now();
console.log(heapSort(myArr));
console.log(Date.now() - start);