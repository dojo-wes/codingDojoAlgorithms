// String.concat
function concat(str1, ...strings) {
  for(str of strings) {
    str1 += str;
  }
  console.log(str1);
  return str1;
}

String.prototype.concatenate = function(...strings) {
  let result = this.toString();
  for(str of strings) {
    result += str;
  }
  console.log(result);
  return result;
} 

let myStr = 'hello';
// concat(myStr, ' world');
// 'hello'.concatenate(' world');
// console.log(myStr);

function slice(str, start, end = str.length) {
  let result = '';
  if(start < 0) {
    start += str.length;
  }
  if(end < 0) {
    end += str.length;
  }
  while(start < end) {
    result += str[start];
    start++;
  }
  return result;
}

// console.log(myStr.slice(-2, -4));
// console.log(slice(myStr, -2, 4));

function trim(str) {
  let start = 0;
  while (str[start] === '\n' || str[start] === '\t' || str[start] === ' ') {
    start++;
  }
  let end = str.length - 1;
  while (str[end] === '\n' || str[end] === '\t' || str[end] === ' ') {
    end--;
  }
  end++;
  return slice(str, start, end);
}

const someStr = '   \t hello world\thh   \n';
// console.log(trim(someStr));

function split(str, separator, limit) {
  let results = [];
  let subStr = '';
  for(let i = 0; i < str.length; i++) {
    if(results.length === limit) {
      // console.log(results);
      return results;
    }
    if(str[i] === separator[0]) {
      let split = true;
      for(let j = 1; j < separator.length; j++) {
        if(separator[j] !== str[i + j]) {
          split = false;
          break;
        }
      }
      if(split) {
        results.push(subStr);
        subStr = '';
        i += separator.length;
      }
    }
    if(str[i] !== separator[0]){
      subStr += str[i];
    }
  }
  results.push(subStr);
  // console.log(results);
  return results;
}

const url = 'https://www.facebook.com/hi/anotherthing/anotherotherthing';
// console.log(url.split('/'));
split(url, '/');
split(url, '/', 2);
// split(url, '/hi/');