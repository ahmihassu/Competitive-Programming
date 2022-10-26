const countSwaps = (a) => {
  let numSwaps = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        numSwaps++;
      }
    }
  }
  console.log(
    "Array is sorted in " +
      numSwaps +
      " swaps.\nFirst Element: " +
      a[0] +
      "\nLast Element: " +
      a[a.length - 1]
  );
};
