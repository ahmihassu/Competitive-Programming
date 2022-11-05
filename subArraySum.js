const subarraySum = (nums, k) => {
  const map = {};
  let output = 0;
  let sum = 0;

  map[0] = 1;
  for (const num of nums) {
    sum += num;
    const prefix = sum - k;
    if (map[prefix]) output += map[prefix];

    if (!map[sum]) map[sum] = 1;
    else map[sum]++;
  }

  return output;
};
