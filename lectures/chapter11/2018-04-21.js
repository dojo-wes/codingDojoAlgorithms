const BST = require("./2018-04-16").BST;
const BSTNode = require("./2018-04-16").BSTNode;

BST.prototype.arrayToBST = function(array, left = 0, right) {
  if(right === undefined) {
    right = array.length;
  }
  const len = right - left;
  const mid = left + Math.floor(len / 2);
  if (len > 0) {
    this.add(array[mid]);
    this.arrayToBST(array, left, mid);
    this.arrayToBST(array, mid + 1, right);
  } else {
    return this;
  }
}

function tree_piv(mid) {
  //Find the power of twoness:
  var power_twoness = 1;
  while (power_twoness <= mid / 2) {
    power_twoness *= 2;
  }

  if (((power_twoness / 2) - 1) <= (mid - power_twoness)) {
    return power_twoness - 1;
  }
  else {
    return mid - (power_twoness / 2);
  }
}

function coolArrToBST(arr, left = 0, right) {
  if(right === left) {
    return;
  }
  if(right === undefined) {
    right = arr.length;
  }
  var mid = left + tree_piv(right - left);

  var blah = new BSTNode(arr[mid]);
  blah.left = coolArrToBST(arr, left, mid);
  blah.right = coolArrToBST(arr, mid + 1, right);

  return blah;
}

BST.prototype.isBalanced = function(node = this.root) {
  if(!node) {
    return true;
  }
  let leftBal = this.isBalanced(node.left);
  let rightBal = this.isBalanced(node.right);
  if(Math.abs(this.height(node.right) - this.height(node.left)) > 1) {
    return false;
  }
  return leftBal && rightBal;
}

let tree = new BST();
const nodes = [5, 10, 15, 17, 20, 25, 25, 30];
tree.arrayToBST(nodes);
// console.log(tree.isBalanced());
// console.log(tree.size);

// for(let node of nodes) {
//   console.log(tree.contains(node));
// }

// let nicksTree = coolArrToBST(nodes);
// console.log(nicksTree);
module.exports = {
  BST
}