const topKFrequent = (nums, k) => {
  const freqMap = {};
  const bucket = [];
  let result = [];

  for (let num of nums) {
    if (freqMap[num] === undefined) {
      freqMap[num] = 1;
    } else {
      freqMap[num]++;
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    bucket.push([]);
  }

  for (let key in freqMap) {
    let count = freqMap[key];
    bucket[count].push(key);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length === 0) {
      continue;
    } else {
      result = [...result, ...bucket[i]];
    }
  }
  return result.slice(0, k);
};
