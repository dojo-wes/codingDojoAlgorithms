function censor(str, badWords) {
  if(badWords.length == 0 || str.length == 0) {
    return str;
  }
  for(let i = 0; i < badWords.length; i++) {
    let result = '';
    let j = 0;
    while(j < str.length) {
      let match = false;
      if(str[j].toLowerCase() === badWords[i][0].toLowerCase()) {
        for(let k = 1; k < badWords[i].length; k++) {
          if(str[k + j].toLowerCase() !== badWords[i][k].toLowerCase()) {
            match = false;
            break;
          }
          match = true;
        }
      }
      if(!match) {
        result += str[j];
        j++;
      } else {
        for(let l = 0; l < badWords[i].length; l++) {
          result += 'x';
        }
        j += badWords[i].length;
      }
    }
    str = result;
  }
  return str;
}

// Create a function that returns all permutations of a given string.Example: given "team", return an array with the unique 24 strings including "team", "meat", "tame", "mate", "aemt", "tmea", "etam", "atme", etc.How can you know that you covered them all ?
function allButIndex(str, idx) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(i !== idx) {
      result += str[i];
    }
  }
  return result;
}

function allPermutations(str, subStr = '', results = []) {
  if(!str.length) {
    return results.push(subStr);
  }
  for(let i = 0; i < str.length; i++) {
    let newStr = allButIndex(str, i);
    allPermutations(newStr, subStr + str[i], results);
  }
  return results;
}

function allLooselyInterleavedStrings() {

}

module.exports = {
  censor,
  allPermutations,
  allLooselyInterleavedStrings,
}