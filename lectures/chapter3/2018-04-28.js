// Given array and an additional value, insert this value at the beginning of the array.Do this without using any built -in array methods.

function pushFront(arr, val) {
  for(var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  console.log(arr);
  return arr;
}

// pushFront([2, 3, 4], 1);
// should return [1, 2, 3, 4]

function popFront(arr) {
  var val = arr[0];
  for(var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  console.log(arr);
  arr.pop();
  return val;
}

// console.log(popFront([1,2,3,4]));

function insertAt(arr, idx, val) {
  for(var i = arr.length; i > idx; i--) {
    arr[i] = arr[i - 1];
  }
  arr[idx] = val;
  console.log(arr);
  return arr;
}

insertAt([2, 4, 5], 0, 3);