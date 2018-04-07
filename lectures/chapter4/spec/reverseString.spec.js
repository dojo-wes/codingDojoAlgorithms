const reverse = require('../2018-04-07').reverseString;

describe("reverse string", () => {
  it('reverses the string', () => {
    const given = "creature";
    expect(
      reverse(given)
    ).toBe('erutaerc');
  });
})