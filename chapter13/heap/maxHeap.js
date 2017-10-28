class MaxHeap {
	constructor(arr=[]) {
		this.heap = arr;
	}
	size() {
		return this.heap.length;
	}
	isEmpty() {
		return !this.size();
	}
	top() {
		return this.heap[0];
	}
	insert(val) {
		this.heap.push(val);
		this.repairUp();
		return this;
	}
	contains(val) {
		for(var i = 1; i < this.heap.length; i++) {
			if(this.heap[i] === val) {
				return true;
			}
		}
		return false;
	}
	repairUp(idx = this.size() - 1) {
		// console.log('this.size()', this.size());
		let parentIdx = Math.ceil(idx / 2 - 1);
		if(parentIdx !== undefined) {
			while(this.heap[parentIdx] < this.heap[idx]) {
				this.swap(idx, parentIdx);
				idx = parentIdx;
				parentIdx = Math.ceil(idx / 2 - 1);
			}
		}
		return this;
	}
	remove() {
		if(!this.isEmpty()) {
			this.swap(0, this.size() - 1);
			let result = this.heap.pop();
			this.repairDown();
			return result;
		}
		return undefined;
	}
	repairDown(idx=0, end=this.size()) {
		let child = Math.ceil(idx * 2 + 1);
		// check which child is higher priority
		if(this.heap[child] === undefined || child >= end) {
			return this;
		} else if(this.heap[child] < this.heap[child + 1] && child + 1 < end) {
			child += 1;
		}
		// check priority, swap, recurse
		// console.log("idx", idx, "child", child);	
		if(this.heap[idx] < this.heap[child]) {
			// console.log(this.heap);
			this.swap(idx, child);
			this.repairDown(child, end);
		}
	}
	swap(idx1, idx2) {
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}
	show() {
		console.log(this.heap);
		return this;
	}
	heapify() {
		let start = Math.floor(this.heap.length / 2);
		for (var i = start; i >= 0 ; i--) {
			this.repairDown(i);
		}
		return this;
	}
	sort() {
		// take heapified array
		let arr = this.heap;
		// loop through all values while end pointer > 0
		for(var i = arr.length - 1; i > 0; i--) {
			// swap 0 and last unswapped, repair down from 0, ignore sorted values
			this.swap(i, 0);
			// end pointer will point to last sorted value, last unswapped = end - 1
			this.repairDown(0, i);
		}
		console.log(arr);
		return this;
		// return this
	}
}

function heapSort(arr) {
	let heap = new MaxHeap(arr);
	heap.heapify().sort();
	return heap.heap;
};

let array = [10,11,12,13,14,16,12,20,02,21,22,23,24,25,26,27,28,29,55,60];
let h = new MaxHeap(array);
h.heapify()
console.log("_________________")
// h.show()
// .show().sort().show();
console.log(heapSort(array));
// console.log(h.remove());
// h.show();
// console.log(h.remove());
// h.show();
// console.log(h.remove());
// h.show();
// console.log(h.remove());
// h.show();
// console.log(h.remove());
// h.show();
// console.log(h.remove());
// h.show();
// console.log(h.remove());
// h.show();
// console.log(h.remove());
// h.show();