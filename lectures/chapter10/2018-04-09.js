function stringToWordArray(str, result = [], index =0, sub='') {
  if (index === str.length ){
    if (sub.length > 0){
      result.push(sub);
    }
    return result;
  }
  if (str[index] != ' ' && str[index] != '\t' && str[index] != '\n'){
    sub += str[index];
  } else if (str[index + 1] != ' ' && str[index + 1] != '\t' && str[index + 1] != '\n' && sub.length > 0){
    result.push(sub);
    sub = '';
  }
  return stringToWordArray(str, result, index+1, sub);
}


// function stringRotate(str, num){
//   num %= str.length;
//   if (num === 0) {
//     return str;
//   }
//   // console.log('num', num);
//   let result = '';
//   for (let i = str.length - num; i < str.length; i++) {
//     result += str[i];
//   }
//   for (let i = 0; i < str.length - num; i++) {
//     result += str[i];
//   }
//   // console.log("start", start);
//   // console.log("end", end);
//   return result;
// }

// function stringRotate(str, amount) {
//   amount %= str.length;
//   if (amount === 0) {
//     return str;
//   }
//   let temp = str[str.length - 1];
//   str = str.slice(0, -1);
//   str = temp + str;
//   return stringRotate(str, amount - 1);
// }

function stringRotate(str, amount) {
  amount %= str.length;
  return str.slice(str.length - amount) + str.slice(0, str.length - amount);
}


module.exports = {
  stringToWordArray,
  stringRotate,
}