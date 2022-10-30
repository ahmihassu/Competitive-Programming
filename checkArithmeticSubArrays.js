const checkArithmeticSubarrays = (nums, l, r) => {
  let answer = [];
  let checker = [];
  let m = l.length;
  let p1 = 0,
    p2 = 0;
  while (p1 < m && p2 < m) {
    for (let i = l[p1]; i <= r[p2]; i++) {
      checker.push(nums[i]);
    }
    checker.sort((a, b) => a - b);

    let diff = checker[1] - checker[0];
    let ans = true;
    for (let i = 0; i < checker.length - 1; i++) {
      if (checker[i + 1] - checker[i] != diff) ans = false;
    }
    answer.push(ans);
    p1++;
    p2++;
    checker = [];
  }
  return answer;
};
