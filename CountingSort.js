const countingSort = (arr) => {
  let freq = Array(100).fill(0, 0);
  for (let el of arr) {
    freq[el]++;
  }
  return freq;
};
