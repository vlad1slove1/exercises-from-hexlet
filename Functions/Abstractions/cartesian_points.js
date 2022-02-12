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

export { makeDecartPoint, getX, getY };
