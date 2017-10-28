function BST() {
	this.root = null;
	this.add = add;
	this.min = min;
	this.max = max;
	this.find = find;
	this.size = size;
	this.height = function(node=this.root) {
		if(node) {
			var left = this.height(node.left);
			var right = this.height(node.right);
			if(left > right) {
				return 1 + left;
			} else {
				return 1 + right;
			}
		} else {
			return 0;
		}
	};
	this.isBalanced = function(node=this.root) {
		if(node) {
			if(Math.abs(this.height(node.left) - this.height(node.right)) > 1) {
				return false;
			} else {
				return(this.isBalanced(node.left) && this.isBalanced(node.right));
			}
		}
		return true;
	}
	this.arrayToBST = function(arr, left=0, right=arr.length-1) {
		console.log("left", left, "right", right)
		if(left === right) {
			console.log("adding L ONLY, array val:", arr[left]);
			this.add(arr[left]);
			return;
		} else if(right - left === 1) {
			console.log("adding L and R, array val L:", arr[left], "val R:", arr[right]);
			this.add(arr[left]);
			this.add(arr[right]);
			return;
		} else {
			var mid = Math.ceil((left + right) / 2);
			console.log("mid is:", mid, "adding MID:", arr[mid], "length is greater than 2")
			this.add(arr[mid]);
			this.arrayToBST(arr, left, mid - 1);
			this.arrayToBST(arr, mid + 1, right);
		}
		return this;
	}
}

function BSTNode(arg) {
	this.data = arg;
	this.right = null;
	this.left = null;
}

function add(data) {
	var n = new BSTNode(data);
	if(!this.root) {
		this.root = n;
		var curr = this.root;
	} else {
		var curr = this.root
		while(curr) {
			if(n.data >= curr.data) {
				if(curr.right) {
					curr = curr.right;
				} else {
					curr.right = n;
					break;
				}
			} else if(n.data < curr.data) {
				if(curr.left) {
					curr = curr.left;
				} else {
					curr.left = n;
					break;
				}
			}
		}
	}
	// console.log(curr);
	return this;
}

function min() {
	if(!this.root) {
		return null;
	} else {
		var curr = this.root;
		while(curr.left) {
			curr = curr.left;
		}
		console.log(curr.data);
		return curr;
	}
}

function max() {
	if(!this.root) {
		return null;
	} else {
		var curr = this.root;
		while(curr.right) {
			curr = curr.right;
		}
		// console.log(curr.data);
		return curr;
	}
}

function find(data) {
	if(this.root) {
		var curr = this.root;
		while(curr) {
			if(curr.data === data) {
				console.log(curr);
				return true;
			} else if(data < curr.data) {
				curr = curr.left;
			} else if(data > curr.data) {
				curr = curr.right;
			}
		}
	}
	return false;
}

function size(node=this.root) {
	if(node) {
		return 1 + this.size(node.left) + this.size(node.right);
	} else {
		return 0;
	}
}

function height(curr=this.root) {
	var heightTree = new BST();
	function subHeight(node=curr, sub=0, results=heightTree) {
		// console.log("sub", sub)
		if(node) {
			// console.log("node.data", node.data)
			sub += 1;
			subHeight(node.left, sub, results);
			subHeight(node.right, sub, results);
		} else {
			results.add(sub);
			// console.log(results);
		}
		return results;
	}
	// console.log(subHeight(), "subHeight()");
	return subHeight().max().data;
}

BST.prototype.BSTtoArray = function(node=this.root, arr=[]) {
	if(node) {
		if(node.left) {
			this.BSTtoArray(node.left, arr);
		}
		arr.push(node.data);
		if(node.right) {
			this.BSTtoArray(node.right, arr);
		}
	}
	return arr;
};

BST.prototype.isPerfect = function(node = this.root) {
	// calculate the number of nodes at each level, determined by height
	const levels = this.calcLevels(node);
	console.log(levels);
	// calculate the height of the tree
	const height = this.height(node) - 1;
	if(levels) {
		for(var i = 1; i < levels.length - 1; i ++) {
			if(levels[i] / 2 != levels[i + 1]) {
			console.log(levels[i] / 2, "!==", levels[i + 1]);
				return false;
			}
		}
		return true;
	}
	return false;
}

BST.prototype.calcLevels = function(node, levels=[null]) {
	// console.log("height", this.height(node), "node", node.data);
	// console.log(levels);
	if(!node) {
		return;
	};
	if(node.left && node.right) {
		if(levels[this.height(node) - 1]) {
			levels[this.height(node) - 1] += 2;
		} else {
			levels[this.height(node) - 1] = 2;
		}
		this.calcLevels(node.left, levels);
		this.calcLevels(node.right, levels);
	} else if(node.left || node.right) {
		console.log("going to return false");
		return false;
	}
	return levels;
}

BST.prototype.isPerfect2 = function(node = this.root) {
	if(node) {
		const left = this.height(node.left);
		const right = this.height(node.right);
		if(right !== left) {
			return false;
		} else {
			return this.isPerfect2(node.left) && this.isPerfect2(node.right);
		}
	}
	return true;
}

BST.prototype.isComplete = function(node = this.root) {
	// full lets us know whether the left side has an additional node
	let full = true;
	// that gives this context in the inner function
	let that = this;
	// total height will tell us what the lowest level of the tree is
	// if we can figure out how to tell what the current height is, we could determine if curr node has children
	// on the bottom-most level. If it does and full is false, we can return false
	// totalHeight - 1 so we get height excluding root
	const totalHeight = this.height() - 1;
	console.log("totalHeight", totalHeight);
	// breakLevel should be the level in which full was set to false
	let breakLevel = 0;
	// breakHeight should be the max height of the child node when full was set to false
	let breakHeight = 0;
	// inner function so we can keep track of globals
	function recurse(node) {
		if(node) {
			const left = that.height(node.left);
			const right = that.height(node.right);
			console.log("node", node.data, "full", full);
			console.log("left", left, "right", right);
			if(right > left || left - right > 1 || (full === false && totalHeight - left === breakLevel && left === breakHeight)) {
				console.log("breaking", left, right, full);
				return false;
			} else if(left > right) {
				// if left is ever greater than false, we know it is no longer full
				if(full) {
					// totalHeight - left will give us the level of the current node, or the level of the node where full was set to false;
					breakLevel = totalHeight - left;
					// breakHeight can be used for a break case. If any other node on the same breakLevel has a height that meets the breakHeight AND full is false, we can break, because there are nodes on the bottom-most level that are unordered
					breakHeight = left;
					full = false;
				}
				// if left is greater than right AGAIN, we know it cannot be complete.
				// This is a good idea, but doesn't work because further up the left sub tree it will break even though it is valid
				// else {
				// 	console.log("left is > than right and full == false");
				// 	return false;
				// }
			} else {
				const resultL = recurse(node.left);
				const resultR = recurse(node.right);
				return (resultL && resultR);
			}
		}
		return true;
	}
	return recurse(node);
}

BST.prototype.findPath = function(n1, n2, rootN = this.root) {
	let path = {
		nodes: [],
		pretty: []
	};
	function recurse(node, n) {
		if(node) {
			// console.log("curr", node.data, path.pretty);
			if(node.data === n) {
				path.nodes.push(node);
				path.pretty.push(node.data);
				// console.log("node found", path.pretty);
				return true;
			}
			// if(path.length > 0 ) {
			// 	path.nodes.push(node);
			// 	path.pretty.push(node.data);
			// 	console.log("traversing back up", path.pretty);}
			else {
				if(recurse(node.left, n)) {
					// console.log("left is true");
					path.nodes.push(node);
					path.pretty.push(node.data);
					// console.log("traversing back up", path.pretty);
					return true;
				} else if(recurse(node.right, n)) {
					// console.log("Right is true", node.data);
					path.nodes.push(node);
					path.pretty.push(node.data);
					// console.log("traversing back up", path.pretty);
					return true;
				}
			}
		}
		return false;
	}
	// when to recurse, when to return, what to return 
	recurse(rootN, n1);
	let path1 = path;
	path = {
		nodes: [],
		pretty: []
	};
	recurse(rootN, n2);
	let path2 = path;
	// console.log("path 1", path1.pretty, "path 2", path2.pretty);

	for(var i = path1.nodes.length - 2; i >= 0; i--) {
		// console.log("equals", path1.pretty[1], path2.pretty[path2.pretty.length - 2]); 
		if(path1.nodes[i] === path2.nodes[path2.nodes.length -2]) {
			path1.nodes.length -= 1;
			path1.pretty.length -= 1;
			path2.nodes.length -= 1;
			path2.pretty.length -= 1;
			// console.log("path1", path1.pretty, "path2", path2.pretty);
		} else {
			path2.nodes.length -= 1;
			path2.pretty.length -= 1;
			path2.nodes.reverse();
			path2.pretty.reverse();
			// console.log("path1", path1.pretty, "path2", path2.pretty);
			path.nodes = path1.nodes.concat(path2.nodes);
			path.pretty = path1.pretty.concat(path2.pretty);
			return path;
		}
	}
}


let p = new BST();
p.add(10).add(5).add(15).add(3).add(7).add(13).add(1);
console.log(p.findPath(7, 15).pretty);
// console.log(p.BSTtoArray());

// var comp = new BST()
// comp.add(10).add(5).add(15).add(3).add(7).add(13).add(17).add(1);
// console.log(comp.isComplete());
// console.log(x.isComplete());

// let perf = new BST()
// perf.add(10).add(5).add(15).add(3)
// console.log(perf.isPerfect2());
// var bal = new BST()
// bal.add(5).add(3).add(7)
// x.min()
// x.max()
// console.log(x.find(3));
// console.log(x.find(100));
// console.log(x.size());
// console.log(x.height());
// console.log(bal.isBalanced());
// var sorted = [0,1,2,3,4,5,6,7,8];
// console.log(bal.arrayToBST(sorted).isBalanced())
// console.log(bal.isBalanced(), "arrayToBST")
// console.log(x.BSTtoArray())
