const BST = require('./2018-04-21').BST;

BST.prototype.closestAncestor = function(val1, val2) {
  if(!this.contains(val1) || !this.contains(val2)) {
    return null;
  }
  let curr = this.root;
  while(curr) {
    if (curr.val < val1 && curr.val < val2) {
      curr = curr.right;
    } else if (curr.val > val1 && curr.val > val2) {
      curr = curr.left;
    } else {
      return curr.val;
    }
  }
  // this will never run
  return null;
}

BST.prototype.traversePre = function(node = this.root) {
  if(!node) {
    return;
  }
  console.log(node.val);
  this.traversePre(node.left);
  this.traversePre(node.right);
  return;
}

BST.prototype.traversePost = function(node = this.root) {
  if(!node) {
    return;
  }
  this.traversePost(node.left);
  this.traversePost(node.right);
  console.log(node.val);
  return;
}

BST.prototype.bst2Arr = function() {
  let arr = [];
  function returnVal(nodeVal) {
    if (!nodeVal) {
      return;
    }
    const leftVal = returnVal(nodeVal.left);
    // console.log(nodeVal.val);
    arr.push(nodeVal.val);
    const rightVal = returnVal(nodeVal.right);
  }
  returnVal(this.root);
  return arr;
}

// let tree = new BST();
// const nodes = [5, 10, 15, 12, 17, 19, 23, 23, 23];
// tree.arrayToBST(nodes);
// console.log("root:", tree.root.val);
// tree.traversePost();
// console.log(tree.bst2Arr());
// console.log(tree.closestAncestor(10, 19));

module.exports = {
  BST
}