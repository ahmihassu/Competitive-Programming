const pancakeSort = (arr) => {
  let answer = [];
  let p1 = arr.indexOf(Math.max(...arr));
  let p2 = arr.length - 1;

  while (p2 > 0) {
    if (p1 == arr.length - 1) {
      let cp = arr.slice(0, p2);
      p1 = arr.indexOf(Math.max(...cp));
      p2--;
      continue;
    }

    if (p1 == 0) {
      let i = 0,
        j = p2;
      while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
      let cp = arr.slice(0, p2);
      p1 = arr.indexOf(Math.max(...cp));
      answer.push(p2 + 1);
      p2--;
      continue;
    }

    let i = 0,
      j = p1;
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }

    i = 0;
    j = p2;
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }

    answer.push(p1 + 1);
    answer.push(p2 + 1);
    let cp = arr.slice(0, p2);
    p1 = arr.indexOf(Math.max(...cp));
    p2--;
  }
  return answer;
};
