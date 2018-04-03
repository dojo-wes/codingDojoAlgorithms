const rFib = require('../2018-04-02').rFib;

describe('rFib()', () => {
  it('should return the correct fibonacci number in the sequence', () => {
    expect(
      rFib(5)
    ).toBe(5);
  });

  it('should return 0 when given 0', () => {
    expect(
      rFib(0)
    ).toBe(0);
  });

  it('should return 1 when given 2', () => {
    expect(
      rFib(2)
    ).toBe(1);
  });

  it('should return 1 when 1 is given', () => {
    expect(
      rFib(1)
    ).toBe(1);
  });

  it('should return 0 when a negative number is given', () => {
    expect(
      rFib(-8)
    ).toBe(0);
  });

  it('should truncate when a float is given', () => {
    expect(
      rFib(3.65)
    ).toBe(2);
  });
});