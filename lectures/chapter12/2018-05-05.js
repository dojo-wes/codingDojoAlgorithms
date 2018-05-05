const partition = require('./2018-04-30').partition;

function qSort(arr, start = 0, end = arr.length) {
  if(start >= end) {
    return;
  }
  let pivot = partition(arr, start, end);

  qSort(arr, start, pivot);
  qSort(arr, pivot + 1, end);
  return arr;
}

function radixSort(arr) {
  let pow = 0;
  let digits = true;
  
  while(digits) {
    let buckets = [];
    for(let i = 0; i < 10; i++) {
      buckets.push([]);
    }
    digits = false;

    for(let i = 0; i < arr.length; i++) {
      let bucket = Math.trunc((arr[i] / Math.pow(10, pow)) % 10);
      buckets[bucket].push(arr[i]);
      if(bucket > 0) {
        digits = true;
      }
    }
    pow++;

    let result = [];
    for(let i = 0; i < buckets.length; i++) {
      for(let j = 0; j < buckets[i].length; j++) {
        result.push(buckets[i][j]);
      }
    }
    arr = result;
  }
  console.log(arr);
  return arr;
}

function makeTestArr() {
  let arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push((Math.trunc(Math.random() * 1000000)));
  }
  console.log(arr);
  return arr;
}

const myArr = makeTestArr();
let start = Date.now();
radixSort(myArr);
console.log(Date.now() - start);


module.exports = {
  qSort,
  radixSort
}