const fact = require('../2018-03-31').rFactorial;

describe('recursive factorial', () => {
  it('should return 1 when given 0', () => {
    expect(
      fact(0)
    ).toBe(1);
  });

  it('should return 1 when given 1', () => {
    expect(
      fact(1)
    ).toBe(1);
  });

  it('should return 1 when given a negative integer', () => {
    expect(
      fact(-1)
    ).toBe(1);
  });

  it('should truncate when given a float', () => {
    expect(
      fact(6.5)
    ).toBe(720);
  });

  it('should return factorial of integer', () => {
    expect(
      fact(3)
    ).toBe(6);
  });
});