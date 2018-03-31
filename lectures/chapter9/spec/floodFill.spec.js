const floodFill = require('../2018-03-31').floodFill;

describe('recursive flood fill', () => {
  it('should return original canvas if given xy out of range', () => {
    const canvas = [
      [2, 3, 3, 4, 0],
      [7, 3, 3, 5, 3],
      [6, 5, 3, 4, 1],
      [1, 2, 3, 3, 3]
    ];
    const startXY = [10, 10];
    const color = 1;
    expect(
      floodFill(canvas, startXY, color)
    ).toEqual(canvas);
  });

  it('should return flood filled canvas given valid startXY', () => {
    const canvas = [
      [3, 2, 3, 4, 3],
      [2, 3, 3, 4, 0],
      [7, 3, 3, 5, 3],
      [6, 5, 3, 4, 1],
      [1, 2, 3, 3, 3]
    ];
    const startXY = [2, 2];
    const color = 1;
    expect(
      floodFill(canvas, startXY, color)
    ).toEqual(
      [
        [3, 2, 1, 4, 3],
        [2, 1, 1, 4, 0],
        [7, 1, 1, 5, 3],
        [6, 5, 1, 4, 1],
        [1, 2, 1, 1, 1]
      ]
    );
  });

  it('should return flood filled canvas if given startXY on boundary', () => {
    const canvas = [
      [3, 2, 3, 4, 3],
      [2, 3, 3, 4, 0],
      [7, 3, 3, 5, 3],
      [6, 5, 3, 4, 1],
      [1, 2, 3, 3, 3]
    ];
    const startXY = [2, 4];
    const color = 1;
    expect(
      floodFill(canvas, startXY, color)
    ).toEqual(
      [
        [3, 2, 1, 4, 3],
        [2, 1, 1, 4, 0],
        [7, 1, 1, 5, 3],
        [6, 5, 1, 4, 1],
        [1, 2, 1, 1, 1]
      ]
    );
  });
});