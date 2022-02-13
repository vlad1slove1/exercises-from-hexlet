/*
The following functions are one of the simpliest solutions of cartesian system.
All points represented inside objects.
*/

// paste the coordinates to make a point
const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

// get X coordinate
const getX = (point) => point.x;
// get Y coordinate
const getY = (point) => point.y;

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

export {
  makeDecartPoint,
  getX,
  getY,
  getQuadrant,
};
