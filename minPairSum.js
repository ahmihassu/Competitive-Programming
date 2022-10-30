const minPairSum = (nums) => {
  nums.sort((a, b) => a - b);
  let p1 = 0,
    p2 = nums.length - 1;
  let max = nums[p1] + nums[p2];
  while (p1 < p2) {
    if (nums[p1] + nums[p2] > max) max = nums[p1] + nums[p2];
    p1++;
    p2--;
  }
  return max;
};
