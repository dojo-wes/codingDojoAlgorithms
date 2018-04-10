const convert = require('../2018-04-09').stringToWordArray;

describe('stringToWordArray()', () => {
  it('given a string of words with spaces between words, should return an array of words', () => {
    const given = "Life is not a drill!";
    const expected = ['Life', 'is', 'not', 'a', 'drill!'];
    expect(
      convert(given)
    ).toEqual(expected);
  });

  it('given a string of words with tabs between words, should return an array of words', () => {
    const given = "Life\tis\tnot\ta\tdrill!";
    const expected = ['Life', 'is', 'not', 'a', 'drill!'];
    expect(
      convert(given)
    ).toEqual(expected);
  });

  it('given a string of words with linefeeds between words, should return an array of words', () => {
    const given = "Life\nis\nnot\na\ndrill!";
    const expected = ['Life', 'is', 'not', 'a', 'drill!'];
    expect(
      convert(given)
    ).toEqual(expected);
  });

  it('given a string of words with mixed spacing between words, should return an array of words', () => {
    const given = "Life\nis\tnot a \n \t drill!";
    const expected = ['Life', 'is', 'not', 'a', 'drill!'];
    expect(
      convert(given)
    ).toEqual(expected);
  });

  it('given a string with no spaces, should return an array with the original string', () => {
    const given = "Supercalifragilisticexpialidocious";
    const expected = ['Supercalifragilisticexpialidocious'];
    expect(
      convert(given)
    ).toEqual(expected);
  });

  it('should be accurate when there are spaces on the beginning or end of the string', () => {
    const given = "\nLife\nis\tnot a \n \t drill!\t";
    const expected = ['Life', 'is', 'not', 'a', 'drill!'];
    expect(
      convert(given)
    ).toEqual(expected);
  });
});