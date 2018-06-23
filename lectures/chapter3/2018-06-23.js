// Array: Push Front
// Given array and an additional value, insert this value at the beginning of the array.Do this without using any built -in array methods.

// for all indices
  // take current index and move its value to the right by one index

  // once everything is moved over: arr[0] = val
  
function pushFront(arr, val) {
  // start i at end of array (arr.length - 1), end at 0
  for(var i = arr.length - 1; i >= 0; i--) {
    // move each index value to the right by one: arr[i + 1] = arr[i]
    arr[i + 1] = arr[i];
  }
  arr[0] = val;
  return arr;
}
var test = [1, 2, 3, 4];
console.log(pushFront(test, 0));

function popFront(arr) {
  // save value at arr[0] in a variable
  // shift everything to the left by one
  // pop the last value
  // return value
  var value = arr[0];
  for(var i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i]; 
  }
  arr.length--;
  return value;
}

console.log(popFront(test));
console.log(test);