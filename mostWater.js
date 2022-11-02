var maxArea = function (height) {
  let p1 = 0;
  let p2 = height.length - 1;
  let max = 0;
  while (p1 !== p2) {
    let diff = p2 - p1;
    if (diff === 0) diff = 1;
    if (Math.min(height[p1], height[p2]) * diff > max) {
      max = Math.min(height[p1], height[p2]) * diff;
    }
    if (height[p1] < height[p2]) {
      p1++;
    } else p2--;
  }
  return max;
};
