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
    const n = new AVLNode(value);
    if(!this.head) {
      this.head = n;
      return this;
    }
    const head = this.head;
    function recurse(node = head) {
      if(n.val >= node.val) {
        if(node.right) {
          recurse(node.right);
        } else {
          node.right = n;
          node.balance -= 1;
          return;
        }
      } else {
        if(node.left) {
          recurse(node.left);
        } else {
          node.left = n;
          node.balance += 1;
          return;
        }
      }
      node.balance = node.left.height() - node.right.height();
      return;
    }
    recurse();
    return this;
  }

  remove(value) {
    let head = this.head;
    function recurse(node = head) {
      let curr = value >= node.val ? node.right : node.left;
      if(curr) {
        if(value === curr.val) {
          // delete function;
          console.log('found a match', curr);
          removeNode(node, value);
        } else {
          recurse(curr);
        }
      } else {
        // handle case where no node matches
        return false;
      }
      const right = node.right ? node.right.height() : 0;
      const left = node.left ? node.left.height() : 0;
      node.balance = left - right;
      return;
    }
    recurse();

    function removeNode(parent, value) {
      console.log('inside removeNode()', 'parent:', parent.val, 'value:', value);
      const node = parent.right && parent.right.val === value ? parent.right : parent.left;

      if(node.right && node.left) {
        removeNodeWithTwoChildren(parent, node);
      } else if(node.right || node.left) {
        removeNodeWithOneChild(parent, node);
      } else {
        removeNodeWithNoChildren(parent, node);
      }
    }
    function removeNodeWithNoChildren(parent, node) {
      if(parent.right === node) {
        parent.right = null;
      } else {
        parent.left = null;
      }
    };
    function removeNodeWithOneChild() {

    };
    function removeNodeWithTwoChildren() {

    };
  }
}

let avl = new AVLTree();

avl.add(10).add(5).add(15).add(3).add(7).add(13).add(17);
avl.remove(17);
console.log(avl.head);