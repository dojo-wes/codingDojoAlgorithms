
// Write rFib(num).Recursively compute and return numth Fibonacci value.As earlier, treat first two(num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: rFib(2) = 1(0 + 1); rFib(3) = 2(1 + 1); rFib(4) = 3(1 + 2); rFib(5) = 5(2 + 3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.”
function rFib(num, x=0 , y=1) {
  // base case(s)
  num = num % 1 === 0 ? num : Math.trunc(num);
  if (num <= 0){
    return x;
  }
  return rFib(num-1, y, x+y);
}

function rFib2(num) {
  let x = 0;
  let y = 1;
  function recurse() {
    num = num % 1 === 0 ? num : Math.trunc(num);
    if (num <= 1) {
      return x;
    }
    x = y;
    y += x;
    num--;
    return recurse();
  };
  return recurse();
}

module.exports = {
  rFib,
  rFib2
}