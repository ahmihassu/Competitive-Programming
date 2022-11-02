var moveZeroes = function (nums) {
  let p1 = 0;
  let p2 = 1;
  while (p2 < nums.length) {
    if (nums[p1] === 0) {
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
    }
    if (nums[p1] === 0 && nums[p2] === 0) {
      p2++;
      continue;
    }
    p1++;
    p2++;
  }
  return nums;
};
