var SList = require('./FebSList');

var myList = new SList();

SList.prototype.reverse = function() {
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

Array.prototype.equals = function (arr) {
  if (!Array.isArray(arr) || arr.length !== this.length) {
    return false;
  }
  for (var idx = 0; idx < this.length; idx++) {
    if (arr[idx] !== this[idx]) {
      return false;
    }
  }
  return true;
};

// testReverse();

function testReverse() {
  let testList = new SList();

  const cases = [
    {
      values: [1, 2, 3, 4],
      expected: [4, 3, 2, 1]
    },
    {
      values: [],
      expected: null
    },
    {
      values: [1],
      expected: [1]
    },
    {
      values: [1, 2],
      expected: [2, 1]
    },
  ];

  for(let mycase of cases) {
    testList.head = null;
    let result = [];

    for(let value of mycase.values) {
      testList.addBack(value);
    }

    // console.log('head before call', testList.head);
    testList.reverse();

    let curr = testList.head;
    while(curr) {
      result.push(curr.val)
      curr = curr.next;
    }

    // const bool = result.length ? result.equals(mycase.expected) : null;

    if (result.equals(mycase.expected)) {
      console.log("SUCCESS", mycase.values);
      console.log("------------------------------------");
    } else {
      console.log("FAILURE", mycase.values);
      console.log("Expected: ", mycase.expected);
      console.log("Returned: ", result);
      console.log("------------------------------------");
    }
  }
}

module.exports = SList;