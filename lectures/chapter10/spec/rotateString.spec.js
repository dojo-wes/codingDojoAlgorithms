const rotate = require('../2018-04-09').stringRotate;

describe('stringRotate()', () => {
  it('given a string of words and an integer number string should rotate to the right by the given number', () => {
    const str = "Boris Godunov";
    const expected = 'dunovBoris Go';
    expect(
      rotate(str, 5)
    ).toBe(expected);
  }); 
  it('given a string of words and an integer number string should rotate to the right by the given number that is greater than the string length', () => {
    const str = "Boris Godunov";
    const expected = 'dunovBoris Go';
    expect(
      rotate(str, 18)
    ).toBe(expected);
  });
});