function rSigma(num, sum=0) {
  if (num % 1 !== 0) {
    num = Math.trunc(num);
  }
  if (num <= 0) {
    return sum;
  }
  return rSigma(num - 1, sum + num);
}

function rFactorial(num, product=1) {
  if (num <= 1) {
    return product;
  }
  if (num % 1 !== 0) {
    num = Math.trunc(num);
  }
  return rFactorial(num - 1, product * num);
}

function floodFill(canvas, startXY, color) {
  // save original color to compare later
  // change original to new color
  // compare adjacent numbers within bounds
    // recurse if equal to original color
  const x = startXY[0];
  const y = startXY[1];
  
  const original = canvas[y] ? canvas[y][x] : undefined;
  if(original === undefined) {
    return canvas;
  }
  canvas[y][x] = color;

  // left
  if(x - 1 >= 0 && canvas[y][x - 1] === original) {
    floodFill(canvas, [x - 1, y], color);
  }
  // right
  if(x + 1 < canvas[y].length && canvas[y][x + 1] === original) {
    floodFill(canvas, [x + 1, y], color);
  }
  // above
  if(y - 1 >= 0 && canvas[y - 1][x] === original) {
    floodFill(canvas, [x, y - 1], color);
  }
  // below
  if(y + 1 < canvas.length && canvas[y + 1][x] === original) {
    floodFill(canvas, [x, y + 1], color);
  }
  return canvas;
}

module.exports = {
  rSigma,
  rFactorial,
  floodFill,
}