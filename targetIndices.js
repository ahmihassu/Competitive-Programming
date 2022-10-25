const targetIndices = (nums, target) => {
  let targetix = [];
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let pos = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        min = nums[j];
        pos = j;
        let temp = nums[i];
        nums[i] = min;
        nums[pos] = temp;
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      targetix.push(i);
    }
  }
  return targetix;
};
