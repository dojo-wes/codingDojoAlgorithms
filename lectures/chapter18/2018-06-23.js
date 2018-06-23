function decToBinString(num) {
  //for each bit, divide by 2, take the remainder
  let result = '';
  while(num) {
    result = num % 2 + result;
    num = Math.trunc(num / 2);
  }
  return '0b' + result;
}

// console.log(0b1101);
// console.log(0b11 >> 1);
// Count in Binary
// Given integer representing the number of bits, recursively print strings that count, in binary representation, from 0 up to the max number representable by that number of bits.
function countInBinary(bits, substr='0b', results=[]) {
  if(!bits) {
    results.push(substr);
    return;
  }
  countInBinary(bits - 1, substr + '0', results);
  countInBinary(bits - 1, substr + '1', results);
  return results;
}

// console.log(countInBinary(8));

function encodeBytesTo32(bytes) {
  let result = bytes[0];
  console.log('current byte', bytes[0], result);
  for(let i = 1; i < bytes.length; i++) {
    let shifter = 8;
    console.log('current byte', bytes[i]);
    if(i === 3) {
      shifter = 7;
    }
    result = (result << shifter);
    console.log('hex string of shifted result', result.toString(16));
    result |= bytes[i];
    console.log('merged result', result);
  }
  return result;
}
// console.log(encodeBytesTo32([0xF0, 0xC3, 0x96, 0x59]));
// console.log(0xF0C39659);


// On the previous |= << issue, this might help understand it
function bit_set(num, bit) {
  return num | 1 << bit;
}
// console.log(bit_set(0b1010, 2));
// console.log(decToBinString(14));