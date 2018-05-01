const bracesValid = require('../2018-04-28').braces_valid;

describe('bracesValid()', () => {
  it('should return true when braces are valid', () => {
    const given = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
    expect(
      bracesValid(given)
    ).toBe(true);
  });
  
  it('should return true when braces are valid', () => {
    const given = "A(1)s[O (n]0{t) 0}k";
    expect(
      bracesValid(given)
    ).toBe(false);
  });

  it('should return false if there is an open brace at the end of the string', () => {
    const given = "{}{";
    expect(
      bracesValid(given)
    ).toBe(false);
  });
});