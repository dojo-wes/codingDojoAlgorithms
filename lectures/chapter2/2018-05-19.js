// start with biggest coin
// take out as many as possible
// go to next biggest coin
// repeat until no change is left

// make an array of amounts - arranged largest to smallest [25, 10, 5, 1]
// initialize a return object
// loop through the array
  // take out as many of the current coin as possible
  // divide current number/remainder by the coin value -- 3.8ish
    // get rid of the decimal point -- 3 quarters
    // subtract 3 * 25 from cents === remainder
    // cents -= 3 * 25
function generateCoinChange(cents) {
  const coins = [100, 50, 25, 10, 5, 1];
  let result = [];
  for(let i = 0; i < coins.length; i++) {
    // let currentNumber = Math.floor(cents / coins[i]);
    // result.push(currentNumber);
    // cents -= currentNumber * coins[i];
    result.push(Math.floor(cents / coins[i]))
    cents %= coins[i];
  }
  return result;
}

// console.log(generateCoinChange(97)); // 3 quarters, 1 dimes, 1 nickel, 4 pennies


// 0, 1, 1, 2, 3, 5, 8, 13
// set variables a and b
// set a to 0 and b to 1
// loop while num >= 0
  // to shift
    // set sum to a+b
    // set a to b
    // set b to sum
  // decrement num
// return sum
function fibonacci(num) {
  let a = 0;
  let b = 1;
  while(num > 0) {
    let sum = a + b;
    a = b;
    b = sum;
    num--;
  }
  return a;
}

// console.log(fibonacci(7));

// console.log(Math.trunc((256 / Math.pow(10, 2)) % 10));

function extractDigit(num, digitNum) {
  return Math.trunc((Math.abs(num) / Math.pow(10, digitNum)) % 10);
}

console.log(extractDigit(-1234, 2));