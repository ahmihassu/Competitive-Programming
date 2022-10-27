const insertionSort1 = (n, arr) => {
  const last = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (last <= arr[i]) {
      [arr[i + 1]] = [arr[i]]; //copy using destruct
      console.log(arr.join(" "));
      if (i == 0) {
        arr[i] = last;
        console.log(arr.join(" "));
        break;
      }
    } else {
      arr[i + 1] = last;
      console.log(arr.join(" "));
      break;
    }
  }
};
