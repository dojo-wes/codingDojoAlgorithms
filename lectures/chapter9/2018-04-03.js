function inOrderSubsets(str, subStr = "", results=[]){ 
  let letter = str.slice(0, 1);
  let newStr = str.slice(1);
  if(!str.length) {
    results.push(subStr);
  } else {
    inOrderSubsets(newStr, subStr, results);
    inOrderSubsets(newStr, subStr + letter, results);
  }
  return results;
}

inOrderSubsets('abc');

module.exports = {
  inOrderSubsets,
}