const remove = require('../2018-03-31').removeShorterStrings;

describe('removeShorterStrings', () => {
  it('should remove strings shorter than length', () => {
    const arr = ['hello', 'world', 'I', 'am', 'a', 'stringggggggg'];
    expect(
      remove(arr, 3)
    ).toEqual(['hello', 'world', 'stringggggggg']);
  });

  it('should return an empty array if all values are shorter than length', () => {
    const arr = ['hello', 'world', 'I', 'am', 'a', 'stringggggggg'];
    expect(
      remove(arr, 200)
    ).toEqual([]);
  });

  it('should return original array if no string is shorter than length', () => {
    const arr = ['hello', 'world', 'I', 'am', 'a', 'stringggggggg'];
    expect(
      remove(arr, 0)
    ).toEqual(['hello', 'world', 'I', 'am', 'a', 'stringggggggg']);
  });
});