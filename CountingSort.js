const countingSort = (arr) => {
  let freq = [];
  let counted = [];
  for (let i = 0; i < arr.length; i++) {
    freq[i] = 0;
    counted[i] = false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (counted[i] == true) continue;
    for (let j = 0; j < arr.length; j++) {
      let pos = arr[i];
      if (arr[i] === arr[j]) {
        freq[pos]++;
        counted[j] = true;
      }
    }
  }
  return freq.slice(0, 100);
};
