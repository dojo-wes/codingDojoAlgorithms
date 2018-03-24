// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s.Example: [1, 2, 3, 4, 10]→ true(between indices 3 & 4), but[1, 2, 4, 2, 1]→ false.

function balancePoint(arr){
  var sumFront = arr[0];
  var sumBack = arr[arr.length-1];
  var i = 1;
  var j = arr.length-2;
  while(i <= j){
    if(sumFront <= sumBack){
      sumFront += arr[i];
      i++;
    } else {
      sumBack += arr[j];
      j--;
    }
  }
  // if(sumFront == sumBack){
  //   return true;
  // }
  // return false;

  // this statement evaluates to a boolean
  return sumFront == sumBack;
}

var test = [1, 2, 3, 4, 10];
var test2 = [1, 2, 4, 2, 1];
// console.log(balancePoint(test));
// console.log(balancePoint(test2));

// Given a sorted array and a value, return whether the array contains that value.Do not sequentially iterate the array.Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted.As always, only use built -in functions that you are prepared to recreate(write yourself) on demand!

function binarySearch(arr, num){
  var lower = 0;
  var upper = arr.length-1;
  while(lower <= upper){
    var mid = Math.ceil((upper + lower)/2);
    if(arr[mid] == num){
      return true;
    } 
    if(arr[mid] < num){
      lower = mid + 1;
    } else{
      upper = mid - 1;
    }
  }
  return false;
}

var test = [1, 2, 3, 4];
// console.log(binarySearch(test, 4));

function binaryTester(func) {
  var testCases = [
    {
      testArr: [1, 2, 3, 4],
      testNum: 4,
      expected: true
    },
    {
      testArr: [1, 2, 3, 4],
      testNum: 5,
      expected: false
    },
  ]
  for(var test of testCases) {
    if(func(test.testArr, test.testNum) == test.expected) {
      console.log("working test");
    } else {
      console.log('broken', test);
    }
  }
}

binaryTester(binarySearch);