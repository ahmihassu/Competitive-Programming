const countingSort = (arr) => {
  let counter = [];
  let counted = [];
  for (let i = 0; i < arr.length; i++) {
    counter[i] = 0;
    counted[i] = false;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let pos = arr[j];
      if (arr[i] === arr[j] && counted[j] === false) {
        counter[pos]++;
        counted[j] = true;
      }
    }
  }
  return counter;
};
