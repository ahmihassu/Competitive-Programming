const pivotIndex = (nums) => {
  let rightSum = 0;
  let leftSum = 0;

  nums.forEach((v) => (rightSum += v));

  for (var i = 0; i <= nums.length - 1; i++) {
    let curr = nums[i];

    rightSum -= curr;

    if (leftSum === rightSum) return i;

    leftSum += curr;
  }

  return -1;
};
