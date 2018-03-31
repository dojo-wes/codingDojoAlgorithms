const getDigits = require('../2018-03-31').getDigits;

describe('getDigits()', () => {
  it('should return the correct number given a string of alphanumeric characters', () => {
    expect(
      getDigits("0s1a3y5w7h9a2t4?6!8?0")
    ).toBe(1357924680);
  });
 
  it('should return the original string if given a string with no numbers', () => {
    expect(
      getDigits('hello')
    ).toBe('hello');
  });

  it('should work for numbers that have zeroes in the middle', () => {
    expect(
      getDigits('a101010b')
    ).toBe(101010);
  })
});