function reverseString(str) {
  let result = '';
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true . "D(i{a}l[ t]o)n{e" => false . "A(1)s[O (n]0{t) 0}k" => false .
function bracesValid(str) {
  const type = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  let opens = [];
  for(let i = 0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
      opens.push(str[i]);
    } else if (type[str[i]]) {
      if(type[str[i]] !== opens.pop()) {
        return false;
      }
    }
  }
  return opens.length ? false : true;
}

// Associative arrays are sometimes called maps because a key(string) maps to a value.Given two arrays, create an associative array(map) containing keys of the first, and values of the second.For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], 
//  return {
  //  "abc": 42,
  //  3: "wassup", 
  //  "yo": true
// }.

function zipArrays(arr1, arr2) {
  const length = arr1.length >= arr2.length ? arr2.length : arr1.length;
  let result = {};
  for (let i = 0; i < length; i++) {
    if (!result.hasOwnProperty([arr1[i]])) {
      result[arr1[i]] = arr2[i];
    }
  }
  return result;
}

// String.concat(str2,str3,...,strX) -add string(s) to end of existing one. Return new string.
String.prototype.concatenate = function (...strings) {
  let newStr = this;
  for(let str of strings) {
    newStr += str;
  }
  return newStr;
}

let myString = "hello ";
console.log(myString.concatenate("world", "hi"));
console.log(myString);

module.exports = {
  reverseString,
  bracesValid,
  zipArrays
}