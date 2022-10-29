const maxOperations = (nums, k) => {
  let count = 0;
  let p1 = 0,
    p2 = nums.length - 1;
  nums.sort((a, b) => a - b);
  while (p1 < p2) {
    if (nums[p1] + nums[p2] == k) {
      count++;
      p1++;
      p2--;
    } else if (nums[p1] + nums[p2] > k) p2--;
    else p1++;
  }
  return count;
};
