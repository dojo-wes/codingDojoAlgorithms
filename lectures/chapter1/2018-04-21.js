var myNumber = 42;
var myName = "Wes";

var temp = myNumber;
myNumber = myName;
myName = temp;
// console.log(myName, myNumber);
// var count = 0;
// for(var i = 512; i < 4097; i++) {
//   if(i % 5 === 0) {
//     console.log(i);
//     count++
//   }
// }
// console.log(count, "values");

// for(var i = -52; i < 1067; i++) {
//   console.log(i);
// }

// var i = 6;
// while(i <= 60000) {
//   console.log(i);
//   i += 6;
// }

// function beCheerful() {
//   console.log("Good Morning");
// }
// for(var i = 1; i <= 98; i++) {
//   beCheerful();
// }

// for(var i = 1; i <= 100; i++) {
//   console.log(i);
//   if(i % 10 === 0) {
//     console.log("Coding");
//   }
//   if(i % 5 === 0) {
//     console.log("Dojo");
//   }
// }

// for(var i = -300; i <= 0; i+=3) {
//   if(i === -3 || i === -6) {
//     continue;
//   }
//   console.log(i);
// }

function whatDoYouKnow(incoming) {
  console.log(incoming);
}

// whatDoYouKnow("this is the value");

// var i = 2000;
// while(i <= 5280) {
//   console.log(i);
//   i++;
// }
// var sum = 0;
// for(var i = -300000; i <= 300000; i++) {
//   if(Math.abs(i) % 2 === 1) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log(sum);

function howDidYouKnow(num1, num2) {
  if((num1 === 20 && num2 === 6)||(num1 === 6 && num2 === 20)) {
    console.log("How did you know?");
  } else {
    console.log("Just another day...");
  }
}

// howDidYouKnow(20, 6);

// var i = 2016;
// while(i > 0) {
//   console.log(i);
//   i -= 4;
// }

function isLeapYear(year) {
  if (year % 100 === 0) {
    return year % 400 === 0 ? true : false;
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
}
// console.log(isLeapYear(401));

function flexibleCountdown(lowNum, highNum, mult) {
  for(var i = highNum; i >= lowNum; i--) {
    if(i % mult === 0) {
      console.log(i);
    }
  }
}

// flexibleCountdown(2, 9, 3);

function countdown(num) {
  var arr = [];
  while(num >= 0) {
    arr.push(num);
    num--;
  }
  console.log(arr, arr.length);
}
// countdown(10);

function printAndReturn(arr) {
  console.log(arr[0]);
  return arr[1];
}

// console.log(printAndReturn([1, 2]));

function firstPlusLength(arr) {
  return arr[0] + arr.length;
}

// console.log(firstPlusLength([1, 2, 3, 4, 5, 6]));

function valuesGreaterThanSecond(arr) {
  if(arr.length < 2) {
    console.log("You've inputted a bad array");
  }
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[1]) {
      console.log(arr[i]);
      count++;
    }
  }
  console.log("count", count);
}

// valuesGreaterThanSecond([1]);

function valuesGreaterThanSecond2(arr) {
  if(arr.length < 2) {
    return null;
  }
  var onlyGreater = arr.filter(function(element) {
    return element > arr[1];
  });
  onlyGreater.map(function(element) {
    console.log(element);
  });
  console.log("count", onlyGreater.length);
}

// valuesGreaterThanSecond2([1, 3, 5, 7, 9, 13]);

function thisLengthThatValue(num1, num2) {
  if(num1 === num2) {
    console.log("jinx");
  }
  var arr = [];
  while(num1) {
    arr.push(num2);
    num1--;
  }
  console.log(arr, "length:", arr.length);
}

// thisLengthThatValue(20, "hi");

function fitTheFirst(arr) {
  if(arr[0] > arr.length) {
    console.log("Too big!");
  } else if(arr[0] < arr.length) {
    console.log("Too small!");
  } else if(arr[0] === arr.length) {
    console.log("Just right!");
  } else {
    console.log("What?");
  }
}

// fitTheFirst(["hi"]);