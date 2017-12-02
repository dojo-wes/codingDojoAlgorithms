class BTNode {
	constructor(value) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
}

class BT {
	constructor() {
		this.root = null;
	}

	add(val) {
		var node = new BTNode(val);
		if(!this.root) {
			this.root = node;
		} else {
			var currNode = this.root;
			// console.log('curr', currNode);
			while(currNode.right || currNode.left) {
				if(node.val >= currNode.val) {
					if(!currNode.right) {
						break;
					}
					currNode = currNode.right;
				} else {
					if(!currNode.left) {
						break;
					}
					currNode = currNode.left;
				}
			}
			if(node.val >= currNode.val) {
				currNode.right = node;
			} else {
				currNode.left = node;
			}
		}
		return this;
	}
}

bt = new BT();
bt.add(10).add(5).add(15).add(8).add(20);
console.log(bt);