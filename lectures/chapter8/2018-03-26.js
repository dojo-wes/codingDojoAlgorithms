const SList = require('../legacy/FebSList');

SList.prototype.reverse = function () {
  if (!this.head) {
    return null;
  }
  let prev = this.head;
  let curr = this.head.next;
  let temp;
  prev.next = null;
  while (curr) {
    // prev = curr;
    // curr = temp;
    // temp = curr.next;
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  this.head = prev;
  return this;
}

SList.prototype.isPalindrome = function () {
  if (!this.head){
    return null;
  }

  if (!this.head.next){
    return true;
  }

  let curr1 = this.head;
  let curr2 = this.head;
  let midIndex = Math.ceil(this.length / 2);
  let midNode;

  for(let count = 1; count < midIndex; count++){
    curr2 = curr2.next;
  }
  midNode = curr2;

  for(let index = midIndex; index > 0; index--) {
    for(let offset = index; offset > 0; offset--){
      curr2 = curr2.next;
    }
    if (curr1.val === curr2.val){
      curr2 = midNode;
      curr1 = curr1.next;
    } else {
      return false;
    }
  }
  return true
}

// use for debugging
const test = new SList();
test.addMultiple(['l', 'e', 'v']);
// put a breakpoint on the function call to step into.
// additional breakpoints may be helpful
// test.isPalindrome();

module.exports = SList;