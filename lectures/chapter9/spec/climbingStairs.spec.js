const climbingStairs = require('../2018-04-07').climbingStairs;

describe('climbingStairs()', () => {
  it('given an integer return an array with all possible combinations of steps', () => {
    const expected = [[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2]];
    expect(
      climbingStairs(4)
    ).toEqual(expected);
  });

  it('given 1 should return [[1]]', () => {
    const expected = [[1]];
    expect(
      climbingStairs(1)
    ).toEqual(expected);
  });
  
  describe('equal is true', () => {
    let options;
    beforeEach(() => {
      options = {
        equal: true,
      }
    });

    it('given an options object where only equal is true should return arrays where the sum of the even indices === sum of the odd indices', () => {
      const expected = [[1, 1, 1, 1], [1, 2, 1], [2, 2]];
      expect(
        climbingStairs(4, options)
      ).toEqual(expected);
    });
  });

  describe('onlyLeft is true', () => {
    let options;
    beforeEach(() => {
      options = {
        onlyLeft: true,
      }
    });

    it('given an options object where only onlyLeft is true should return only even length arrays', () => {
      const expected = [[1,1,1,1], [2, 2]];
      expect(
        climbingStairs(4, options)
      ).toEqual(expected);
    });
  });

  describe('multiple options', () => {
    let options;
    beforeEach(() => {
      options = {
        onlyLeft: true,
        equal: true,
      }
    });

    it('given an options object where both equal and onlyLeft are true, should return only *equal arrays that have even lengths', () => {
      const expected = [[1, 1, 1, 1], [2, 2]];
      expect(
        climbingStairs(4, options)
      ).toEqual(expected);
    });
  });
});