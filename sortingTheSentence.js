const sortSentence = (s) => {
  let word = s.split(" ");
  let sorted = [];
  word.forEach((w) => {
    let pos = w.length - 1;
    let l = w[pos];
    w = w.slice(0, pos);
    sorted[l - 1] = w;
  });
  return sorted.join(" ");
};
