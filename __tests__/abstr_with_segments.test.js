import { makeDecartPoint } from '../Functions/Abstractions/cartesian_points.js';
import {
  makeSegment,
  getBeginPoint,
  getEndPoint,
  getMidpointOfSegment,
} from '../Functions/Abstractions/abstr_with_segments.js';

test('get begin and end points', () => {
  const beginPoint = makeDecartPoint(3, 2);
  const endPoint = makeDecartPoint(1, 5);
  const segment = makeSegment(beginPoint, endPoint);

  expect(getBeginPoint(segment)).toEqual(beginPoint);
  expect(getEndPoint(segment)).toEqual(endPoint);
});

test('get middle point 1', () => {
  const beginPoint = makeDecartPoint(3, 2);
  const endPoint = makeDecartPoint(1, 5);
  const segment = makeSegment(beginPoint, endPoint);

  expect(getMidpointOfSegment(segment)).toEqual(makeDecartPoint(2, 3.5));
});

test('get middle point 2', () => {
  const beginPoint = makeDecartPoint(1, 2);
  const endPoint = makeDecartPoint(2, 1);
  const segment = makeSegment(beginPoint, endPoint);

  expect(getMidpointOfSegment(segment)).toEqual(makeDecartPoint(1.5, 1.5));
});
