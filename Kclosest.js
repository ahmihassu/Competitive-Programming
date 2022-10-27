const kClosest = (points, k) => {
  points.join();
  points.sort(
    (p1, p2) => p1[0] * p1[0] + p1[1] * p1[1] - p2[0] * p2[0] - p2[1] * p2[1]
  );
  return points.slice(0, k);
};
