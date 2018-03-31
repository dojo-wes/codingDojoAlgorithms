// Create a JavaScript function that given a string, returns the integer made from the string’s digits.Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) {
  const numberRegex = new RegExp('\\d', 'g');
  let numArr = str.match(numberRegex);

  if(!numArr) {
    return str;
  }

  let result = 0;
  let i = 0;
  while(numArr.length) {
    // console.log(numArr);
    const currNum = parseInt(numArr.pop());
    result += currNum * Math.pow(10, i);
    i++;
  }

  return result;
}

function removeShorterStrings(arr, length) {
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length < length) {
      removeCurrentIndex(arr, i);
      i--;
    }
  }
  return arr;
}

function removeCurrentIndex(arr, index) {
  for(var i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
}

module.exports = {
  getDigits,
  removeShorterStrings,
}