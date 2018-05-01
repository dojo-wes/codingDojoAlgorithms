const isPal = require('../2018-04-28').isPal;

describe('isPalindrome()', () => {
  it('should return true when string is an oddly lengthed palindrome', () => {
    const given = 'racecar';
    expect(
      isPal(given)
    ).toBe(true);
  });
  it('should return true when string is an evenly lengthed palindrome', () => {
    const given = 'raceecar';
    expect(
      isPal(given)
    ).toBe(true);
  });
  it('should return false when string is not a palindrome', () => {
    const given = 'racecara';
    expect(
      isPal(given)
    ).toBe(false);
  });
  it('should not ignore spaces or punctuation', () => {
    const given = 'rac ecar';
    expect(
      isPal(given)
    ).toBe(false);
  });
  it('should be case sensitive', () => {
    const given = 'Racecar';
    expect(
      isPal(given)
    ).toBe(false);
  });
});