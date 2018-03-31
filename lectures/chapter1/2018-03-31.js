// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
// for(var x = 1; x <= 100; x++) {
//   if(x % 10 === 0) {
//     console.log("Dojo");
//   } else if(x % 5 === 0) {
//     console.log("Coding");
//   } else {
//     console.log(x);
//   }
// }

// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR.For(2, 9, 3), print 9 6 3(on successive lines).
function flexibleCountdown(lowNum, highNum, mult) {
  console.log('lowNum:', lowNum);
  console.log('highNum:', highNum);
  console.log('mult:', mult);
  for(highNum; highNum >= lowNum; highNum--) {
    if(highNum % mult === 0) {
      console.log(highNum);
    }
  }
}

// flexibleCountdown(2, 9, 3);

// Create a function that accepts a number as an input.Return a new array that counts down by one, from the number(as array’s ‘zeroth’ element) down to 0(as the last element).How long is this array ?

function arrCountdown(num) {
  // make an empty array to store future values
  var newArr = [];
  // set i = num
  // loop through 
    // add i to the array
    // decrement i
  for(var i = num; i > 0; i--) {
    newArr.push(i);
  }
  return newArr;
}

var result = arrCountdown(9);
console.log(result);

function printEach(arr) {
  // for(var i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }
  for(var item of arr) {
    console.log(item);
  }
}

printEach(result);