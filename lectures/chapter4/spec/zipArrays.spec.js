const zip = require('../2018-04-07').zipArrays;

describe('zipArrays()', () => {
  it('zips the arrays into a map', () => {
    const arr1 = ['abc', 3, 'yo'];
    const arr2 = [42, 'wassup', true];
    const expected = {
      'abc': 42,
      3: 'wassup',
      'yo': true
    }
    expect(
      zip(arr1, arr2)
    ).toEqual(expected);
  });
  
  it('should not use the values in the longer array', () => {
    const arr1 = ['abc', 3, 'yo'];
    const arr2 = [42, 'wassup', true, "hi there"];
    const expected = {
      'abc': 42,
      3: 'wassup',
      'yo': true
    }
    expect(
      zip(arr1, arr2)
    ).toEqual(expected);
  });

  it('should not overwrite existing keys', () => {
    const arr1 = ['abc', 3, 'abc'];
    const arr2 = [42, 'wassup', true];
    const expected = {
      'abc': 42,
      3: 'wassup'
    }
    expect(
      zip(arr1, arr2)
    ).toEqual(expected);
  })
});