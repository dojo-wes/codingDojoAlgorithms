class MinHeap {
	constructor() {
		this.heap = [null];
	}
	size() {
		return this.heap.length - 1;
	}
	isEmpty() {
		return !this.size();
	}
	top() {
		return this.heap[1];
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
	repairUp(idx=this.size()) {
		let parentIdx = Math.floor(idx / 2);
		if(parentIdx) {
			while(this.heap[parentIdx] > this.heap[idx]) {
				[this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
				console.log('Switched parent and idx')
				idx = parentIdx;
				parentIdx = Math.floor(idx / 2);
			}
		}
		return this;
	}
	remove() {
		if(!this.isEmpty()) {
			this.swap(1, this.heap.length - 1);
			let result = this.heap.pop();
			this.repairDown();
			return result;
		}
		return undefined;
	}
	repairDown(idx=1) {
		let child = idx * 2;
		// check which child is higher priority
		if(this.heap[child] === undefined) {
			return this;
		} else if(this.heap[child] > this.heap[child + 1]) {
			child += 1;
		}
		// check priority, swap, recurse
		if(this.heap[idx] > this.heap[child]) {
			this.swap(idx, child);
			this.repairDown(child);
		}
	}
	swap(idx1, idx2) {
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}
	show() {
		console.log(this.heap);
		return this;
	}
}

let h = new MinHeap();
// console.log(h.size());
// console.log(h.isEmpty());
// console.log(h.contains(6));
console.log(h.insert(1).insert(3).insert(2).insert(5).insert(1.5).insert(3).insert(4));
console.log(h.remove());
h.show();
console.log(h.remove());
h.show();
console.log(h.remove());
h.show();
console.log(h.remove());
h.show();
console.log(h.remove());
h.show();
console.log(h.remove());
h.show();
console.log(h.remove());
h.show();
console.log(h.remove());
h.show();
console.log(Math.pow(2, 20))