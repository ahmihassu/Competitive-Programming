const smallerNumbersThanCurrent = (nums) => {
  let smaller = [];
  for (let i = 0; i < nums.length; i++) {
    smaller[i] = 0;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        smaller[i]++;
      }
    }
  }
  return smaller;
};
