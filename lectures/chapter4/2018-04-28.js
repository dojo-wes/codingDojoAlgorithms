function braces_valid(str) {
  let opens = [];
  let count = 0;
  let val = true;
  let braces = {
    ")": "(",
    "}": "{",
    "]": "["
  };
  for (let index = 0; index < str.length; index++) {
    if (str[index] === "(" || str[index] === "{" || str[index] === "[") {
      opens.push(str[index]);
    } else if (str[index] === ")" || str[index] === "}" || str[index] === "]") {
      if (braces[str[index]] !== opens.pop()) {
        return false;
      }
    }
  }
  return !opens.length;
}

function isPal(str) {
  let mid = (Math.floor(str.length / 2)); //5
  for (let i = 0; i < mid; i++) { // make this mid?
    if (str.length % 2 !== 0) {
      if (str[mid + 1 + i] !== str[mid - 1 - i]) {
        return false;
      }
    } else {
      if (str[mid + i] !== str[mid - i - 1]) {
        return false;
      }
    }
  }
  return true;
}

function longestPalindrome(str) {
  if(!str.length) {
    return null;
  }
  let max = str[0];
  for(let i = 0; i < str.length; i++) {
    let substr = str[i];
    for(let inner = i + 1; inner < str.length; inner++) {
      substr += str[inner];
      if(isPal(substr)) {
        if(substr.length > max.length) {
          max = substr;
        }
      }
    }
  }
  return max;
}

console.log(longestPalindrome("Yikes! my favorite racecar erupted!"));
console.log(longestPalindrome("what up, daddy-o?"));

module.exports = {
  braces_valid,
  isPal,
}