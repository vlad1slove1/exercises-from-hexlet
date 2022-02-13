import {
  makeDecartPoint,
  getX,
  getY,
  getQuadrant,
} from './cartesian_points.js';

/*
Implement an abstraction (set of functions) to work with rectangles whose sides are always
parallel to the axes. The rectangle can be placed anywhere on the coordinate plane.

With this setting, it is enough to know only three parameters to uniquely set a rectangle
on a plane: the coordinates of the upper left point, width and height. Knowing them, we can
always build a rectangle in one single way.
*/

/*
Main interface:

  1. makeRectangle(point, width, height) (constructor) - Creates a rectangle. It accepts
  parameters: left-top point, width and height. Width and height are positive numbers.

  2. getStartPoint(rectangle), getWidth(rectangle), and getHeight(rectangle) are selectors

  3. containsOrigin(rectangle) - checks if the center of coordinates belongs to the rectangle
  (does not lie on the border of the rectangle, but is inside). To verify this, it is enough
  to check that all the vertices of the rectangle lie in different quadrants (they can be
  calculated at the time of checking).
*/

// making an origin function-constructor
// necessary to write the functions body inside parentesses: () => ({}) !
const makeRectangle = (point, width, height) => ({ point, width, height });

// first point selector
const getStartPoint = (rectangle) => rectangle.point;

// width selector
const getWidth = (rectangle) => rectangle.width;

// height selector
const getHeight = (rectangle) => rectangle.height;

//    2    |     1
//    _____|_____
//   |     |     |
// __|_____|_____|____
//   |    0|     |
//   |_____|_____|
//         |
//    3    |    4

// if the first point is inside 1 quadrant, and the last point is inside 4 quadrant, then
// the coordinate center is inside our rectangle (true)
const containsOrigin = (rectangle) => {
  const firstPoint = getStartPoint(rectangle);
  const lastPoint = makeDecartPoint(
    getX(firstPoint) + getWidth(rectangle),
    getY(firstPoint) - getHeight(rectangle),
  );

  return getQuadrant(firstPoint) === 2 && getQuadrant(lastPoint) === 4;
};

export { makeRectangle, containsOrigin };
