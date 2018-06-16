// Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number(inclusive).Ex.: sigma(3) = 6(or 1 + 2 + 3); sigma(5) = 15(or 1 + 2 + 3 + 4 + 5).

function sigma(num) {
  // set variable sum
  // loop through each number
    // start with num
    // end with 0
      // run while i is greater than or equal to 0
    // add current number to sum
    // i--
  var sum = 0;
  for(var i = num; i >= 0; i--) {
    sum += i;
  }
  // console.log(sum);
  return sum;
}

// console.log(sigma(5));

// Factorial

// Just the Facts, ma’am.Factorials, that is.Write a function factorial(num) that, given a number, returns the product(multiplication) of all positive integers from 1 up to number(inclusive).For example, factorial(3) = 6(or 1 * 2 * 3); factorial(5) = 120(or 1 * 2 * 3 * 4 * 5).
function factorial(num) {
  // set variable product to 1
  // loop through each number
    // start with 2
    // go up to num
      // run loop while i <= num
    // multiply current number and product, save in product
    // i++
  var product = 1;
  while(num > 1) {
    product *= num;
    num--;
  }
  return product;
}

// console.log(factorial(52));

// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 ( fib(0) + fib(1) , or 0+1), fibonacci(3) = 2 ( fib(1) + fib(2) , or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

// [0,1,1,2,3,5,8,13,21]

function fibonacci(num) {
  var sequence = [0, 1];
  for(var i = 2; i <= num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
    // console.log(sequence);
  }
  return sequence[num];
}

function fibonacci2(num) {
  if(num === 0) {
    return 0;
  }
  var a = 0;
  var b = 1;
  for(var i = 2; i <= num; i++) {
    var temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// console.log(fibonacci(1));
// console.log(fibonacci2(1));

// Assume that you have a text field that is exactly 75 characters long.You want to fill it with spaces and asterisks('*'), sometimes called stars.You should print the given number of asterisks consecutively.Depending on which function is called, those stars should be left - justified(first star would be very first char in the text field), or right - justified(last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75 - character text field(with same number of spaces on either side of the block of stars, plus / minus one).

// Write a function drawLeftStars(num) that accepts a number and prints that many

// asterisks.

// Write a function drawRightStars(num) that prints 75 characters total.Stars should build from right side.The last num characters should be asterisks; the other 75 should be spaces.
// Write function drawCenteredStars(num) that prints 75 characters total.The stars should be centered in the 75. The middle num characters should be asterisks; the rest

function drawLeftStars(num) {
  var str = '';
  for(var i = 0; i < num; i++) {
    str = str + "*";
  }
  for(var i = num; i < 75; i++) {
    str += " ";
  }
  return str;
}
function drawRightStars(num) {
  var str = '';
  for(var i = 0; i < num; i++) {
    str = str + "*";
  }
  for(var i = num; i < 75; i++) {
    str = " " + str;
  }
  return str;
}

console.log(drawRightStars(13));

str = "hello " + "world";
str = "           " + str;
console.log(str);