// setting and swapping
var myNumber = 42;
var myName = "Wes";

var temp = myNumber;
myNumber = myName;
myName = temp;
// console.log('myName:', myName, 'myNumber:', myNumber);

// print all integer multiples of 5, from 512 to 4096
// log how many there were

function flexCount(lowNum, highNum, mult) {
  var count = 0;
  for(var i = lowNum; i <= highNum; i++) {
    if(i % mult === 0) {
      console.log(i);
      count++;
    }
  }
  console.log('count:', count);
}

// flexCount(2, 20, 3);
// flexCount(1, 2000, 117);

var myArr = [2,3,4,5,6];
// console.log(myArr[myArr.length]);

//print and return
function printAndReturn(arr) {
  // print the first value
  console.log(arr[0]);
  // return the second value
  return arr[1];
}

console.log(printAndReturn([1, 2]));