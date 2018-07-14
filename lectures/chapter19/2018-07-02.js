class AVLNode {
  constructor(value) {
    this.val = value;
    this.balance = 0;
    this.left = null;
    this.right = null;
  }

  height(node = this) {
    if (!node) {
      return 0;
    }
    const leftDepth = this.height(node.left);
    const rightDepth = this.height(node.right);
    return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
  }

  isBalanced() {
    return Math.abs(this.balance) <= 1;
  }

  setBalance() {
    const right = this.right ? this.right.height() : 0;
    const left = this.left ? this.left.height() : 0;
    this.balance = left - right;
    return this.balance;
  }

  rotateLeft() {
    const swapNode = this.right;
    this.right = swapNode.left;
    swapNode.left = this;

    this.setBalance();
    swapNode.setBalance();

    return swapNode;
  }

  rotateRight() {
    const swapNode = this.left;
    this.left = swapNode.right;
    swapNode.right = this;

    this.setBalance();
    swapNode.setBalance();

    return swapNode;
  }
}

class AVLTree {
  constructor() {
    this.head = null;
  }
  height(node = this.head) {
    if (!node) {
      return 0;
    }
    const leftDepth = this.height(node.left);
    const rightDepth = this.height(node.right);
    return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
  }

  isBalanced(node = this.head) {
    if (!node) {
      return true;
    }
    let leftBal = this.isBalanced(node.left);
    let rightBal = this.isBalanced(node.right);
    if (Math.abs(this.height(node.right) - this.height(node.left)) > 1) {
      return false;
    }
    return leftBal && rightBal;
  }

  // add(value) {
  //   const n = new AVLNode(value);
  //   if(!this.head) {
  //     this.head = n;
  //     return this;
  //   }
  //   const head = this.head;
  //   function recurse(node = head) {
  //     if(n.val >= node.val) {
  //       if(node.right) {
  //         recurse(node.right);
  //       } else {
  //         node.right = n;
  //         node.balance -= 1;
  //         return;
  //       }
  //     } else {
  //       if(node.left) {
  //         recurse(node.left);
  //       } else {
  //         node.left = n;
  //         node.balance += 1;
  //         return;
  //       }
  //     }
  //     const right = node.right ? node.right.height() : 0;
  //     const left = node.left ? node.left.height() : 0;
  //     node.balance = left - right;
  //     return;
  //   }
  //   recurse();
  //   return this;
  // }

  // remove(value) {
  //   // we need to rewrite this to be able to remove the head.
  //   // we are referencing the parent all over the place.
  //   let head = this.head;
  //   if(this.head.val === value) {
  //     removeNode(null, value, this);
  //     return;
  //   }

  //   function recurse(node = head) {
  //     let curr = value >= node.val ? node.right : node.left;
  //     if(curr) {
  //       if(value === curr.val) {
  //         // delete function;
  //         removeNode(node, value);
  //       } else {
  //         recurse(curr);
  //       }
  //     } else {
  //       // handle case where no node matches
  //       return false;
  //     }
  //     const right = node.right ? node.right.height() : 0;
  //     const left = node.left ? node.left.height() : 0;
  //     node.balance = left - right;
  //     return;
  //   }
  //   recurse();

  //   function removeNode(parent, value, tree = null) {
  //     let node;
  //     if(tree) {
  //       node = tree.head;
  //     } else {
  //       console.log('inside removeNode()', 'parent:', parent.val, 'value:', value);
  //       node = parent.right && parent.right.val === value ? parent.right : parent.left;
  //     }

  //     if(node.right && node.left) {
  //       removeNodeWithTwoChildren(node, tree);
  //     } else if(node.right || node.left) {
  //       removeNodeWithOneChild(parent, node, tree);
  //     } else {
  //       removeNodeWithNoChildren(parent, node, tree);
  //     }
  //   }
  //   function removeNodeWithNoChildren(parent, node, tree) {
  //     // if parent === node, we know it's the head because we set node = parent in removeNode
  //     if(tree) {
  //       tree.head = null;
  //     } else {
  //       if(parent.right === node) {
  //         parent.right = null;
  //       } else {
  //         parent.left = null;
  //       }
  //     }
  //   };
  //   function removeNodeWithOneChild(parent, node) {
  //     const child = node.left ? node.left : node.right;
  //     if(parent.left === node) {
  //       parent.left = child;
  //     } else {
  //       parent.right = child;
  //     }
  //   };
  //   function removeNodeWithTwoChildren(node) {
  //     const originalNode = node;
  //     console.log('original node val:', node.val);
  //     function recurse(node, parent) {
  //       console.log('node inside 2 child removal', node.val);
  //       if (!node.left) {
  //         // delete function;
  //         // swap values and delete;
  //         const temp = originalNode.val;
  //         originalNode.val = node.val;
  //         node.val = temp;
  //         removeNode(parent, node.val);
  //       } else {
  //         // handle case where no node matches
  //         recurse(node.left, node);
  //       }
  //       const right = node.right ? node.right.height() : 0;
  //       const left = node.left ? node.left.height() : 0;
  //       node.balance = left - right;
  //       return;
  //     }
  //     recurse(node.right, node);
  //     const right = originalNode.right ? originalNode.right.height() : 0;
  //     const left = originalNode.left ? originalNode.left.height() : 0;
  //     originalNode.balance = left - right;
  //   };
  // }

  // remove2(value, node = this.head, prevVal = this.head.val) {
  //   let returnNode;
  //   function recurse(value, swapNode = node) {
  //     // base case
  //     if (!swapNode) {
  //       return swapNode;
  //     }

  //     if (value < swapNode.val) { // recurse left
  //       swapNode.left = recurse(value, swapNode.left, swapNode.val);
  //     } else if (value > swapNode.val) { // recurse right
  //       swapNode.right = recurse(value, swapNode.right, swapNode.val);
  //     } else { // found the node to delete
  //       if (!swapNode.left && !swapNode.right) { // remove if at end of tree
  //         swapNode = null;
  //       } else if (!swapNode.left && swapNode.right) { // if right is only option
  //         swapNode = swapNode.right;
  //       } else if (swapNode.left && !swapNode.right) { // if left is only option
  //         swapNode = swapNode.left;
  //       } else { // has 2 children nodes
  //         returnNode = swapNode; // set node to return
  //         if (swapNode.val < prevVal) { // make the swap
  //           swapNode.right.left = swapNode.left;
  //           return recurse(value, swapNode.right, swapNode.val);
  //         } else {
  //           swapNode.left.right = swapNode.right;
  //           return recurse(value, swapNode.left, swapNode.val);
  //         }
  //       }
  //     }
  //     return swapNode;
  //   }
  //   node = recurse(value);
  //   if (!node) {
  //     return node;
  //   }
  //   // remove pointers
  //   returnNode.left = null;
  //   returnNode.right = null;

  //   return returnNode;
  // }

  rotateLeft(node) {
    const swapNode = node.right;
    node.right = swapNode.left;
    swapNode.left = node;

    node.setBalance();
    swapNode.setBalance();

    return swapNode;
  }

  rotateRight(node) {
    const swapNode = node.left;
    node.left = swapNode.right;
    swapNode.right = node;

    node.setBalance();
    swapNode.setBalance();

    return swapNode;
  }

  balancedAdd(val) {
    const n = new AVLNode(val);
    
  }
}

let avl = new AVLTree();

// avl.add(10).add(5).add(15).add(3).add(7).add(13).add(17);
// avl.add(44).add(17).add(78).add(32).add(50).add(88).add(48).add(62).add(84).add(92).add(80).add(82);
// avl.remove(10);
avl.add(3).add(2).add(5).add(4).add(6);
avl.head.right = avl.rotateRight(avl.head.right);
console.log(avl.head);