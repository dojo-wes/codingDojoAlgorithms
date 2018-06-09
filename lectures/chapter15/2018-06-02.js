const BST = require('./2018-05-21').BST;
const BSTNode = require('../chapter11/2018-04-16').BSTNode;

BSTNode.prototype.isValid = function() {
  if(this.left && this.right) {
    return this.val > this.left.val && this.val < this.right.val;
  }
  if(this.left) {
    return this.val > this.left.val;
  }
  if(this.right) {
    return this.val < this.right.val;
  }
  return true;
}

// BST.prototype.repair = function(node = this.root) {
//   let wasRepaired = false;
//   let that = this;
//   function recurse(node){
//     console.log(that.bst2Arr());
//     console.log(node.val);
//     if(!node.left && !node.right) {
//       return false;
//     }
//     const left = node.left ? recurse(node.left) : false;
//     const right = node.right ? recurse(node.right) : false;
//     wasRepaired = left || right;
//     if(!node.isValid()) {
//       const left = node.left ? node.left.val : null;
//       const right = node.right ? node.right.val : null;
//       const parent = node.val;
//       if(left !== null && right !== null && parent < left && parent > right) {
//         node.right.val = left;
//         node.left.val = right;
//         recurse(node.left);
//         recurse(node.right);
//       } else if(left !== null && parent < left) {
//         node.val = left;
//         node.left.val = parent;
//         recurse(node.left);
//       } else if(right !== null && parent > right) {
//         node.val = right;
//         node.right.val = parent;
//         recurse(node.right);
//       }
//       return true;
//     }
//     return false;
//   }
//   recurse(node);
//   return wasRepaired;
// }

BST.prototype.toArrRepair = () => {
  let arr = [];
  function traverse(node = this.root) {
    if (!node) {
      return;
    }
    traverse(node.left);
    arr.push(node);
    traverse(node.right);
  }
  traverse();
  let needed = false;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].val > arr[i + 1].val) {
        let temp = arr[i].val;
        arr[i].val = arr[i + 1].val;
        arr[i + 1].val = temp;
        sorted = false;
        needed = true;
      }
    }
  }
  return needed;
}

BST.prototype.repair = function () {
  let needed = false;
  let sorted = false;

  function recurse(node) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      return node.val;
    }

    let left = node.left.val;
    let right = node.right.val;

    recurse(node.left);

    if (left > right) {
      sorted = false;
      needed = true;
      node.right.val = left;
      node.left.val = right;
      left = node.left.val;
      right = node.right.val;
    }

    if (node.val < left && node.val < right) {
      sorted = false;
      needed = true;
      node.left.val = node.val;
      node.val = left;
      left = node.left.val;
    }

    if (node.val > right && node.val > left) {
      sorted = false;
      needed = true;
      node.right.val = node.val;
      node.val = right;
      right = node.right.val;
    }

    recurse(node.right);
  }

  while (!sorted) {
    sorted = true;
    recurse(this.root);
  }

  return needed;
}

let b = new BST();
b.root = new BSTNode(5);
b.root.left = new BSTNode(10);
b.root.right = new BSTNode(15);
b.root.left.left = new BSTNode(15);
b.root.left.right = new BSTNode(11);
b.root.right.left = new BSTNode(3);
b.root.right.right = new BSTNode(9);
b.root.right.right.left = new BSTNode(12);

console.log(b.bst2Arr());
console.log(b.repair());
console.log(b.bst2Arr());