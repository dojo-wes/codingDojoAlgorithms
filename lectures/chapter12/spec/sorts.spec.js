const sort = require('../2018-05-05').radixSort;

function isSorted(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function makeTestArr() {
  let arr = [];
  for(let i = 0; i < 10000; i++) {
    arr.push((Math.trunc(Math.random() * 1000000)));
  }
  console.log(arr);
  return arr;
}

describe('sorts', () => {
  it('returns a sorted array given a sorted array', () => {
    const given = [1,2,3,4,5,6,7,8,9,10];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(
      sort(given)
    ).toEqual(expected);
  });

  it('returns a sorted array given an unsorted array', () => {
    const given = [2, 1, 3, 4 ,5, 7, 6, 9, 8, 10];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(
      sort(given)
    ).toEqual(expected);
  });

  it('returns a sorted array given a reverse sorted array', () => {
    const given = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(
      sort(given)
    ).toEqual(expected);
  });

  it('returns a sorted array given an array with duplicate numbers', () => {
    const given = [1, 2, 3, 6, 3, 4, 5, 9, 9];
    const expected = [1,2,3,3,4,5,6,9,9];
    expect(
      sort(given)
    ).toEqual(expected);
  });
  
  // it('returns a sorted array given a random large array with many digits', () => {
  //   expect(
  //     isSorted(sort(makeTestArr()))
  //   ).toBe(true);
  // });
});