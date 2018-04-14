const perms = require('../2018-04-14').allPermutations;

describe('allStringPermutations()', () => {
  it('should return all string permutations given a string', () => {
    const given = 'abc';
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];

    expect(
      perms(given)
    ).toEqual(expected);
  });
});