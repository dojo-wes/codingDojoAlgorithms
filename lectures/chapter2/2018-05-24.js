// starts with 0 and 1
// 0, 1, 1, 2, 3, 5, 8, 13
function fibonacci(num) {
  if(num === 0) {
    return 0;
  }
  if(num === 1) {
    return 1;
  }
  var sequence = [0, 1];
  for(var i = 2; i <= num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence[sequence.length - 1];
}
// console.log(fibonacci(20));

function fib2(num) {
  var a = 0;
  var b = 1;
  while(num > 0) {
    var temp = a;
    a = b;
    b = temp + b;
    num--;
  }
  return a;
}
// console.log(fib2(5));

function rFib(num, a=0, b=1) {
  if(num <= 1) {
    return num;
  } else {
    return rFib(num - 1) + rFib(num - 2);
  }
}

console.log(rFib(5));