const carPooling = (trips, capacity) => {
  let arr = new Array(1001).fill(0);
  let result = 0;
  for (let [p, f, t] of trips) {
    arr[f] += p;
    arr[t] -= p;
  }
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (result > capacity) return false;
  }
  return true;
};
