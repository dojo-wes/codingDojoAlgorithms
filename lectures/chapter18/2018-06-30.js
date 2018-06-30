function decToBinString(num) {
  let str = '';
  while(num) {
    str = (num & 1) + str;
    num >>>= 1;
  }
  str = '0b' + str;
  return str;
}

console.log(decToBinString(201));

function binAdd(num1, num2) {
  // 1 + 1 == 10
  // 5 + 7 == 0101 
  //          0111 +
  //          ____
  //          1100
  let str = '';
  let carry = 0;
  while(num1 || num2) {
    let digit;
    if((num1 & 1) && (num2 & 1)) {
      digit = carry ? 1 : 0;
      carry = 1;
    } else if ((num1 & 1) || (num2 & 1)) {
      digit = carry ? 0 : 1;
      carry = carry ? 1 : 0;
    } else {
      digit = carry;
      carry = 0;
    }
    console.log('digit', digit);
    str = digit + str;
    num1 >>>= 1
    num2 >>>= 1
  }
  if(carry) {
    str = carry + str;
  }
  return '0b' + str;
}

console.log(binAdd(8, 7));