function insertAt(arr, value, index) {
// keeping in mind the index param move everything over by 1 index
  //fill placeholder (old value) at the index param with value param
  // return array

  // starting at end of the array, move everything over to the right by 1
    // start at arr.length, loop while (> index), i--
    // moving everything over --- arr[i] = arr[i - 1]
  // arr[index] = value
  // return arr
  if(index > arr.length || index < 0) {
    var error = new Error("Index out of range");
    throw error;
  }
  for(var i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
}

module.exports = {
  insertAt
}