// Swap Toward the Center
// Given (accepts, takes) array, swap first and last, third and third - to - last, etc. Input[true, 42, "Ada", 2, "pizza"] becomes["pizza", 42, "Ada", 2, true]. Change[1, 2, 3, 4, 5, 6] to[6, 2, 4, 3, 5, 1].

// [1,2,3,4,5,6,7,8,9,10]
// [10,2,3,4,5,6,7,8,9,1]
// [10,2,8,4,5,6,7,3,9,1]
// [10,2,8,4,6,5,7,3,9,1]

// draw out the problem to thoroughly understand it
// what do we need to know how to do?
  // how do we swap two values in an array?
    // var temp = arr[rightHand];
    // arr[rightHand] = arr[leftHand];
    // arr[leftHand] = temp;
  // how do we make forward progress?
    // loop through array
    // for loop
    // we need to know start, end/condition (the loop will run while second condition is TRUE), increment value
      // start at first index -- 0
      // how do we know when to stop swapping?
        // if swap1 idx > swap2 idx, break out of the loop
        // or stop halfway
      // increment by 2 due to the pattern. 0, 2, 4, etc. This will grab even indices (odd values when indexed by 1).
        // for(var i = 0; i < arr.length / 2; i += 2)
// what do we need to know?
  // how do we know what values to swap?
    // we're already incrementing by 2 so we get 0 (first), 2 (third), 4(fifth), etc
      // how do we know which index to swap with?
    // subtract from length to move inside array from the right hand side
      // last value == arr[arr.length - 1];
      // swap value == arr[arr.length - 1 - i]

function swapTowardCenter(arr) {
  for(var i = 0; i < arr.length / 2; i += 2) {
    var temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(swapTowardCenter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));