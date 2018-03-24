var rainTerraces = require('../student/isabel-chacon');

describe('rainTerraces()', () => {
  it('should be correct when there are no outer buckets', () => {
    const given = [3, 1, 1, 4, 2];
    expect(
      rainTerraces(given)
    ).toBe(4);
  });

  it('should return 0 when there are no buckets', () => {
    const given = [1, 1, 1, 1, 1];
    expect(
      rainTerraces(given)
    ).toBe(0);
  });

  it('should return 0 when given an empty array', () => {
    const given = [];
    expect(
      rainTerraces(given)
    ).toBe(0);
  });

  it('should be correct when there are multiple buckets', () => {
    const given = [12, 1, 12, 1, 12];
    expect(
      rainTerraces(given)
    ).toBe(22);
  });

  it('should return 0 when the terraces are all descending', () => {
    const given = [12, 11, 10, 9, 8];
    expect(
      rainTerraces(given)
    ).toBe(0);
  });

  it('should return 0 when the terraces are all ascending', () => {
    const given = [1, 2, 3, 4, 5];
    expect(
      rainTerraces(given)
    ).toBe(0);
  });

  it('should be correct when there is a tail on the right side', () => {
    const given = [3, 1, 2, 1, 4, 2, 1];
    expect(
      rainTerraces(given)
    ).toBe(5);
  });

  it('should be correct when there are multiple buckets on the tail that have heights shorter than the max', () => {
    const given = [8, 4, 3, 10, 2, 7, 3, 2, 6];
    expect(
      rainTerraces(given)
    ).toBe(21)
  });
});