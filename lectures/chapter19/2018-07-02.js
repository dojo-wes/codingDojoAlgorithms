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

  isBalanced(node = this) {
    return Math.abs(this.balance) <= 1;
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

  add(value) {
    // this needs to be refactored
    const n = new AVLNode(value);
    if(!this.head) {
      this.head = n;
      return this;
    }
    let curr = this.head;
    while(curr) {
      if(n.val >= curr.val) {
        // balance does not necessarily decrease by one every time. It will either decrease by 1 or 0, depending on height of additional subtrees.
        curr.balance -= 1;
        if(curr.right) {
          curr = curr.right;
        } else {
          curr.right = n;
          return this;
        }
      } else {
        // see above
        curr.balance += 1;
        if(curr.left) {
          curr = curr.left;
        } else {
          curr.left = n;
          return this;
        }
      }
    }
  }

  remove(value) {
    // same balance issue from add. We need to know whether the removal will impact height of subtrees by either 1 or 0.
    // starting at the head node, we need to go either right or left, depending on the value (compared to node's value)
    if(!this.head) {
      return null;
    }
    let curr = this.head;
    while(curr) {
      if(curr.right.val === value) {

      }
    }
  }
}