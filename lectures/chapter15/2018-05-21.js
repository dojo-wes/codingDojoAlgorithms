const BST = require('../chapter11/2018-04-23').BST;

BST.prototype.isFull = function (node = this.root) {
  if(!node) {
    return true;
  }
  if(!node.left && !node.right) {
    return true;
  }
  if(node.left && node.right) {
    return this.isFull(node.left) && this.isFull(node.right);
  }
  return false;
}

BST.prototype.isComplete = function() {
  let hasGap = false;
  let height = this.height();
  function recurse(node, level) {
    if(!node) {
      return true;
    }
    if (!node.left && !node.right) {
      return true;
    }
    if (node.left && node.right) {
      if(hasGap) {
        return false;
      }
      return recurse(node.left, level + 1) && recurse(node.right, level + 1);
    }
    if (node.left && !node.right) {
      if(level < height) {
        return false;
      }
      if(hasGap) {
        return false;
      }
      hasGap = true;
    }
    return false;
  }
  return recurse(this.root, 0);
}

// let bst = new BST();
// bst.add(10).add(5).add(15).add(2).add(7).add(17);
// console.log(bst.isComplete());

module.exports = {
  BST
}