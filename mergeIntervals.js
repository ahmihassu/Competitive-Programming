const merge = (intervals) => {
  intervals.sort((p1, p2) => p1[0] - p2[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      if (intervals[i][1] <= intervals[i + 1][1]) {
        intervals[i][1] = intervals[i + 1][1];
        intervals.splice(i + 1, 1);
      } else intervals.splice(i + 1, 1);
      i -= 1;
    }
  }
  return intervals;
};
