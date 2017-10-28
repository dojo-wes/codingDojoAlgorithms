class AVL() {
	constructor() {
		this.root = null;
	}
}

class Node() {
	constructor(data) {
		this.parent = null;
		this.left = null;
		this.right = null;
		this.height = 0;
		this.data = data;
	}
}

AVL.prototype.add = function(value) {
	var node = new BSTNode(data);
	if(!this.root) {
		this.root = node;
	} else {
		var curr = this.root;
		while(curr) {
			if(node.data >= curr.data) {
				if(curr.right) {
					curr = curr.right;
				} else {
					node.parent = curr;
					curr.right = node;
					break;
				}
			} else if(node.data < curr.data) {
				if(curr.left) {
					curr = curr.left;
				} else {
					node.parent = curr;
					curr.left = node;
					break;
				}
			}
		}
	}
	// console.log(curr);
	return this;
};

function updateHeights() {
	// check heights, if we get unbalanced, log
	// next step is building rotations and determining which rotate to use
}

function rotateR(node) {

}

function rotateL(node) {

}
