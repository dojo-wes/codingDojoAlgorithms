const censor = require('../2018-04-14').censor;

describe('censor()', () => {
  it('given a string, and an array of "bad words" censor out all "bad words" from string', () => {
    const str = "Snap crackle pop nincompoop!";
    const badWords = ['crack', 'poop'];

    expect(
      censor(str, badWords)
    ).toBe('Snap xxxxxle pop nincomxxxx!');
  });

  it('should censor case insensitively', () => {
    const str = "Snap crACkle pop nincomPoOp!";
    const badWords = ['crack', 'poop'];

    expect(
      censor(str, badWords)
    ).toBe('Snap xxxxxle pop nincomxxxx!');
  });

  it('should censor naughty word duplicates within string', () => {
    const str = "Snap poop crACkle pop nincomPoOp!";
    const badWords = ['crack', 'poop'];

    expect(
      censor(str, badWords)
    ).toBe('Snap xxxx xxxxxle pop nincomxxxx!');
  });

  it('should censor naughty words that are adjacent', () => {
    const str = "Snap crACkle pop nincomPoOppoop!";
    const badWords = ['crack', 'poop'];

    expect(
      censor(str, badWords)
    ).toBe('Snap xxxxxle pop nincomxxxxxxxx!');
  });
});