const sigma = require('../2018-03-31').rSigma;

describe('recursive sigma', () => {
  it('should return 0 if given a negative number', () => {
    expect(
      sigma(-1)
    ).toBe(0);
  });

  it('should truncate if given a decimal', () => {
    expect(
      sigma(2.7)
    ).toBe(3);
  });

  it('should return sum of integers from 1 to num given a positive int', () => {
    expect(
      sigma(5)
    ).toBe(15);
  });
});