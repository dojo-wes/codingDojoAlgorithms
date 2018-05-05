// Write a function that determines whether a given year is a leap year.If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

var year = 2000;
console.log(leapYear(year));
console.log(year);

// Given an array, return the sum of the first value in the array, plus the array’s length.What happens if the array’s first value is not a number, but a string(like "what?") or a boolean(like false).
function firstPlusLength(arr) {
  return arr[0] + arr.length;
}

// console.log(firstPlusLength([1, 3, 4, 5, 6, 3, 56, 3, 6]));

// Values Greater than Second

// For[1, 3, 5, 7, 9, 13], print values that are greater than its 2 nd value.Return how many values this is.
var myArr = [1, 3, 5, 7, 9, 13];

function valuesGTSecond(arr) {
  // initialize count variable
  // loop through the entire array
  // compare each index against second index
    // if current idx is greater
      // print current idx
      // increment count
    // else
      // continue
  // return count
  
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[1]) {
      console.log(arr[i]);
      count++;
    }
  }
  return count;
}

// var result = valuesGTSecond(myArr);

// Swap Toward the Center

// Given array, swap first and last, third and third - to - last, etc.Input[true, 42, "Ada", 2, "pizza"] becomes["pizza", 42, "Ada", 2, true].Change[1, 2, 3, 4, 5, 6] to[6, 2, 4, 3, 5, 1].

function swapTowardCenter(arr) {
  var left = 0;
  var right = arr.length - 1;

  while(left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left += 2;
    right -= 2;
  }

  return arr;
}

// function swapTowardCenter2(arr) {
//   for(var i = 0; i < arr.length / 2; i += 2) {
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
//   }
//   return arr;
// }
var arr1 = [true, 42, "Ada", 2, "pizza"];
console.log(swapTowardCenter(arr1));
console.log(arr1);

var arr2 = [1, 2, 3, 4, 5, 6];
console.log(swapTowardCenter(arr2));
console.log(arr2);
// console.log(swapTowardCenter2([true, 42, "Ada", 2, "pizza"]));
// console.log(swapTowardCenter2([1, 2, 3, 4, 5, 6]));
