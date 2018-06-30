// clarifying the prompt/problem
// describe the process in human terms
// bridge the gap between human terms and computer terms -- pseudo-code
  // super atomic
  // rough draft
// write code -- edit pseudo-code as needed

function isPrime(num) {
  // accept a number into an indexed loop that will count from num to 0
  // no need to divide the number by itself
  for (var i = Math.floor(num / 2); i > 1; i--) {
    // console.log(i + " " + num % i);
    // if the number is divisible by any number other than itself and 1 stop the loop and return false
    if (num % i == 0) {
      return false;
    }
  }
  // if the index reaches 1, then the number is prime.
  return true;
}
function isPrime(num) {
  if(!(num%2)) {
    return false;
  }
  for (var i = 3; i < Math.sqrt(num) + 1; i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  // if the index reaches 1, then the number is prime.
  return true;
}

console.log(isPrime(17));

function extractDigit(num, digitNum) {
  return Math.trunc(num / Math.pow(10, digitNum)) % 10;
}

// console.log(extractDigit(123, 0)); // 3
// console.log(extractDigit(123, 1)); // 2
