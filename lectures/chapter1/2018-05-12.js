// countdown by fours. Log positive numbers starting at 2016, counting down by fours without using a FOR loop

// for(var i = 0; i < 256; i++) {
//   console.log(i);
// }

// var i = 0;
// while(i < 256) {
//   console.log(i);
//   i++;
// }

var num = 2016;
while(num > 0) {
  // console.log(num);
  num -= 4;
  // num = num - 4;
}

// Flexible Countdown

// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR.For(2, 9, 3), print 963(on successive lines).
// takes, accepts

function flexCountdown(lowNum, highNum, mult) {
  for(var i = highNum; i >= lowNum; i--) {
    if(i % mult === 0) {
      console.log(i);
    }
  }
}

// flexCountdown(3, 250, 19);

// Values Greater than Second, Generalized

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2 nd value.Print how many values this is.What will you do if the array is only one element long ?

function valuesGTSecond(arr) {
  if(arr.length < 2) {
    console.log("Your array must have a length of at least 2");
    console.log(0);
    return [];
  }
  var result = [];
  // var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[1]) {
      result.push(arr[i]);
      // count++;
    }
  }
  console.log(result.length);
  return result;
}

var returnedVal = valuesGTSecond([9, 2, 4, 1, 3, 2, 4, 1, 7]);
// console.log(returnedVal);
// var returnedVal2 = valuesGTSecond(valuesGTSecond([9, 2, 4, 1, 3, 2, 4, 1, 7]));
// console.log('returnedVal2', returnedVal2);
var returned2 = valuesGTSecond(returnedVal);
// console.log(returned2);
var returned3 = valuesGTSecond([1]);
console.log(returned3);