const maxCoins = (piles) => {
  piles.sort((a, b) => a - b);
  let sum = 0;
  let p1 = piles.length - 2;
  while (p1 >= piles.length / 3) {
    sum += piles[p1];
    p1 -= 2;
  }
  return sum;
};
