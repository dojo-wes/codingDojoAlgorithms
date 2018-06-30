const insertAt = require('../2018-06-30').insertAt;

describe('insertAt()', () => {
  beforeEach(() => {
    testArr = [1,2,4,5];
  });
  it('should insert a value at the correct index', () => {
    expect(
      insertAt(testArr, 3, 2)
    ).toEqual([1,2,3,4,5]);
  });
  it('should throw an error when index is out of range -- negative', () => {
    expect(
      () => {
        insertAt(testArr, 3, -1)
      }
    ).toThrow();
  });
  it('should throw an error when index is out of range -- positive', () => {
    expect(
      () => {
        insertAt(testArr, 3, 7)
      }
    ).toThrow();
  });
});