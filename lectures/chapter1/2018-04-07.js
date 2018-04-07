function beCheerful() {
  for (var i = 0; i < 98; i++) {
    console.log("good morning!");
  }
}
// beCheerful()

// Create a function that accepts a number as an input.Return a new array that counts down by one, from the number(as array’s ‘zeroth’ element) down to 0(as the last element).How long is this array ?

function countdown(num) {
  var output = [];
  for(var i = num; i >= 0; i--) {
    output.push(i);
  }
  return output;
}

console.log(countdown(10));
var result = countdown(10);
console.log("length:", result.length);

// Print and Return
// Your function will receive an array with two numbers.Print the first value, and return the second.

function printAndReturn(arr) {
  var first = arr[0];
  var second = arr[1];
  console.log(first);
  return second;
}

// var returned = printAndReturn([200, 100000]);
// console.log(returned);


// For[1, 3, 5, 7, 9, 13], print values that are greater than its 2 nd value.Return how many values this is.

function valuesGT(arr) {
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[1]) {
      console.log(arr[i]);
      count++;
    }
  }
  return count;
}

console.log("count:", valuesGT([100, 3, 5, 7, 9, 13]));