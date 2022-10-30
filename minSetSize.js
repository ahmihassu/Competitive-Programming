const minSetSize = (arr) => {
  let count = 0;
  let freq = Array(Math.max(...arr) + 1).fill(0);
  for (let el of arr) {
    freq[el]++;
  }
  freq.sort((a, b) => a - b);
  let num = 0;
  let i = freq.length - 1;
  while (num < arr.length / 2) {
    num += freq[i];
    count++;
    freq.splice(i, 1);
    i--;
  }
  return count;
};
