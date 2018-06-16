// Remove Blanks

// Create a function that, given a string, returns all of that string’s contents, but without blanks.If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
// console.log("hello " + "world");
function removeBlanks(str) {
  // create result string
  // for each character in input string
    // if character is not blank, concat with result string
  var restricted = [' ', '\n', '\t'];
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(!isInArray(restricted, str[i])) {
      result += str[i];
    }
  }
  return result;
}

function isInArray(arr, val) {
  for(var element of arr) {
    if(element === val) {
      return true;
    }
  }
  return false;
}

// console.log(removeBlanks(" Pl ayTha tF \t u \n nkyM \t usi c "));

function reverseStr(str) {
  var result = '';
  for(var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// console.log(reverseStr('hellooooo'));

// Given a sequence of parentheses, braces and brackets, determine whether it is valid.Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.

function bracesValid(str) {
  var braceTypes = ['{', '(', '['];
  var braceMatches = {
    ')' : '(',
    '}' : '{',
    ']' : '['
  };
  var opens = [];
  for(var i = 0; i < str.length; i++) {
    if(isInArray(braceTypes, str[i])) {
      opens.push(str[i]);
    } else if (braceMatches[str[i]]) {
      if(braceMatches[str[i]] !== opens.pop()) {
        return false;
      }
    }
  }
  if(opens.length > 0) {
    return false;
  }
  return true;
}

console.log(bracesValid("D(i{a}l[ t]o)n{e"));
console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"));
console.log(bracesValid("A(1)s[O (n]0{t) 0}k"));