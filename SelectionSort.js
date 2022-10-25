const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let pos = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        min = arr[j];
        pos = j;
        let temp = arr[i];
        arr[i] = min;
        arr[pos] = temp;
      }
    }
  }
  return arr;
};
