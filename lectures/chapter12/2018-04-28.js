function bubbleSort(arr) {
  let len = arr.length;
  let swapped = true;
  while(swapped) {
    swapped = false;
    for(let i = 0; i < len; i++) {
      if(arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    len--;
  }
  return arr;
}

function selectionSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIdx = i;
    for(var j = i; j < arr.length; j++) {
      if(arr[j] < min) {
        min = arr[j];
        minIdx = j;
      }
    }
    const temp = arr[i];
    arr[i] = min;
    arr[minIdx] = temp;
  }
  return arr;
}

// function insertionSort(arr) {
//   for(let i = 1; i < arr.length; i++) {
//     const curr = arr[i];
//     let ins = i - 1;
//     let swap = false;
//     while(curr < arr[ins] && ins >= 0) {
//       arr[ins + 1] = arr[ins];
//       ins--;
//       swap = true;
//     }
//     if(swap) {
//       ins++;
//       arr[ins] = curr;
//     }
//   }
//   return arr;
// }

function insertionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    let ins = i - 1;
    while(ins >= 0 && curr < arr[ins]) {
      arr[ins + 1] = arr[ins];
      ins--;
    }
    arr[ins + 1] = curr;
  }
  return arr;
};

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
selectionSort(myArr);
console.log(Date.now() - start);

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
};