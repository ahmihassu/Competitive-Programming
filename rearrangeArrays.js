const rearrangeArray = (nums) => {
  nums.sort((a, b) => a - b);
  let rearranged = [];
  let j = 0;
  for (let i = 0; i < nums.length / 2; i++) {
    rearranged[j] = nums[i];
    j = j + 2;
  }
  j = 1;
  for (let i = Math.ceil(nums.length / 2); i < nums.length; i++) {
    rearranged[j] = nums[i];
    j += 2;
  }
  return rearranged;
};
