const insertionSort1 = (n, arr) => {
  let rightmost = arr[n - 1];
  for (let i = n - 1; i >= 0; i--) {
    if (rightmost < arr[i - 1]) {
      arr[i] = arr[i - 1];
      arr.forEach((element) => {
        process.stdout.write(element.toString() + " ");
      });
      console.log();
    } else {
      arr[i] = rightmost;
      arr.forEach((element) => {
        process.stdout.write(element.toString() + " ");
      });
      break;
    }
  }
};
