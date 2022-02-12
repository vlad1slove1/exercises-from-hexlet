import { makeDecartPoint, getX, getY } from './cartesian_points.js';

// Implement several functions to understand abstraction building principle.

// makeSegment() - takes two points and returns the segment
// getMidpointOfSegment() - takes the segment and returns its middle point
// getBeginPoint() - takes the segment and returns its beginning point
// getEndPoint() - takes the segment and retunrs its ending point

const makeSegment = (point1, point2) => {
  const segment = { beginPoint: point1, endPoint: point2 };

  return segment;
};

const getBeginPoint = (segment) => segment.beginPoint;
const getEndPoint = (segment) => segment.endPoint;

const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  const midX = (getX(beginPoint) + getX(endPoint)) / 2;
  const midY = (getY(beginPoint) + getY(endPoint)) / 2;

  return makeDecartPoint(midX, midY);
};

export {
  makeSegment,
  getBeginPoint,
  getEndPoint,
  getMidpointOfSegment,
};
