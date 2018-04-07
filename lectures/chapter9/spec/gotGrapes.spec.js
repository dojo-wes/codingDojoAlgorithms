const gotGrapes = require('../2018-04-07').gotGrapes;

describe('gotGrapes()', () => {
  it('should return the sum when only skipping one bag will lead to the largest sum', () => {
    const given = [2, 1, 2, 1, 2];
    expect(
      gotGrapes(given)
    ).toBe(6);
  });

  it('should return when largest combo starts with second index and we only skip one bag each time', () => {
    const given = [1, 2, 1, 2, 1];
    expect(
      gotGrapes(given)
    ).toBe(4);
  });

  it('should return the sum when the max results from only skipping two bags', () => {
    const given = [2, 1, 1, 3, 1, 1, 2];
    expect(
      gotGrapes(given)
    ).toBe(7);
  });

  it('should return the largest sum when the skipping is mixed', () => {
    const given = [2, 1, 1, 2, 1, 2, 1, 1, 2];
    expect(
      gotGrapes(given)
    ).toBe(8);
  });
});