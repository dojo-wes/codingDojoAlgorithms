function interleaveArrays(arr1, arr2) {
  const result = [];
  var i = 0;
  while (arr1[i] || arr2[i]) {
    if (arr1[i]){
      result.push(arr1[i]);
    }
    if (arr2[i]) {
      result.push(arr2[i]);
    }
    i++;
  }
  return result;
}

const arr1 = [77, 22, 11, 22];
const arr2 = [2, 6, 7, 2, 6, 2];

console.log(interleaveArrays(arr1, arr2));

// Minimal Three - Array Range
// Given three separately - sorted arrays, determine the value from each array that creates the smallest range, and return the min and max of that range.All three of the arrays must have a value within the range.Example: given([1, 2, 4, 15], [3, 10, 12], [5, 10, 13, 17, 23]), return { min: 3, max: 5 }.

// [1, 100] [101, 105] [104, 106]

function minimalThreeArrayRange(arr1, arr2, arr3) {

}