function flexibleCountdown(lowNum, highNum, mult) {
  for(var i = highNum; i > lowNum; i--) {
    if(i % mult === 0) {
      console.log(i);
    }
  }
}

// flexibleCountdown(2, 9, 3);


var testArr = [5, 3, 10, 7, 15];
// avg 8
// max 15
// min 3

var max = testArr[0];
var min = testArr[0];
var avg = 0;
for(var i = 0; i < testArr.length; i++) {
  if (testArr[i] > max) {
    max = testArr[i];
  } else if (testArr[i] < min) {
    min = testArr[i];
  }
  avg += testArr[i] / testArr.length;
}
console.log(avg);
console.log(max);
console.log(min);