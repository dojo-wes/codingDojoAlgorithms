// Set myNumber to 42.Set myName to your name.Now swap myNumber into myName & vice versa.
var myNumber = 42;
var myName = "Wes";

var temp = myNumber;
myNumber = myName;
myName = temp;
// console.log(myName, myNumber);

// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
var count = 0;
for(var i = 512; i < 4096; i++) {
  if(i % 5 === 0) {
    // console.log(i);
    count++;
  }
}
// console.log(count);

// Based on earlier “Countdown by Fours”, given (accepts, takes) lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR.For(2, 9, 3), print 963(on successive lines).
function countdown(lowNum, highNum, mult) {
  // for(var i = highNum; i >= lowNum; i--) {}
  var i = highNum;
  while(i >= lowNum) {
    if(i % mult === 0) {
      console.log(i);
    }
    i--;
  }
}

// console.log(countdown(2, 9, 2));

// Create a function that accepts a number as an input.Return a new array that counts down by one, from the number(as array’s ‘zeroth’ element) down to 0(as the last element).How long is this array ?
function arrCountdown(num) {
  var arr = [];
  for(var i = num; i >= 0; i--) {
    arr.push(i);
  }
  // console.log(arr);
  return arr;
}

// console.log(arrCountdown(10));
// var returnedVal = arrCountdown(10);
// console.log(returnedVal[returnedVal.length - 1]);


// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2 nd value.Print how many values this is.What will you do if the array is only one element long ?
function valuesGTS(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[1]) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.length);
  return newArr;
}

console.log(valuesGTS([10, 2, 3, 1, 1, 2, 4, 5]));