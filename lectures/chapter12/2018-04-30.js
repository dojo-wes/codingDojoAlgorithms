function partition(arr, start=0, end=arr.length) {
  let pivot = start;
  //calc median
  // watch out for off by one errors in quicksort
  // how can we test for this before we get there?
  let first = arr[start];
  let last = arr[end - 1];
  let mid = arr[Math.floor((end - start) / 2) + start];
  if ((last > first && last < mid) || (last < first && last > mid)) {
    arr[start] = last;
    arr[end - start - 1] = first;
  } else if ((mid > first && mid < last) || (mid < first && mid >= last)) {
    arr[start] = mid;
    arr[Math.floor((end - start) / 2) + start] = first;
  }

  for(let i = start + 1; i < end; i++) {
    if(arr[i] < arr[pivot]){
      let temp = arr[i];
      for(let j = i; j > pivot; j--){
        arr[j] = arr[j-1];
      }
      arr[pivot] = temp;
      pivot++;
    }
  }
  // console.log(arr);
  // console.log(pivot);
  return pivot;
}

var arr = [5, 1, 8, 4, 9, 2, 5, 3];
// partition(arr)
// partition(arr, 0, 4);
// partition(arr, 5, arr.length);


module.exports = {
  partition
}