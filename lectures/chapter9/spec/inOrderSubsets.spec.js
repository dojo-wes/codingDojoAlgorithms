const ioSubsets = require("../2018-04-03").inOrderSubsets;

describe('inOrderSubsets', () => {
  it('should return in order subsets when given a string', () => {
    const given = 'abc';
    const expected = ["", "c", "b", "bc", "a", "ac", "ab", "abc"];
    expect(
      ioSubsets(given)
    ).toEqual(expected);
  });
});