const longestOnes = (arr, k) => {
  let i = 0,
    j;
  for (j = 0; j < arr.length; ++j) {
    if (arr[j] === 0) k--;
    if (k < 0 && arr[i++] == 0) k++;
  }
  return j - i;
};
