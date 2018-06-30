function decToBinString(num) {
  //for each bit, divide by 2, take the remainder
  let result = '';
  while (num) {
    result = num % 2 + result;
    num = Math.trunc(num / 2);
  }
  return '0b' + result;
}


function reverseBits(num) {
  let digits = [];
  for(let i = 0; i < 31; i++) {
    digits.push(Math.trunc(num / Math.pow(2, i) % 2));
  }
  console.log(digits);
  let power = 0;
  while(digits.length) {
    const newDigit = digits.pop();
    const oldDigit = Math.trunc(num / Math.pow(2, power) % 2)
    if(newDigit !== oldDigit) {
      if(newDigit) {
        num |= (1 << power);
      } else {
        num &= (1 << power);
      }
    }
    power++;
  }
  return num;
}

function reverseBits2(num) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    // num & 1 grabs the last digit of num
    // result << 1 adds a 0 to the right side of result
    // the logical OR sets the LSD to the last digit of num
    result = (num & 1) | (result << 1);
    // remove one digit from num
    num >>>= 1;
  }
  // cast to an unsigned int
  return result >>> 0;
};

console.log(reverseBits2(0b101010101101)); // 1001100
console.log(decToBinString(2684354560));