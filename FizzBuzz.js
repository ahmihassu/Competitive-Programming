const fizzBuzz = (n) => {
  return new Array(n).fill(0).map((v, i) => {
    if ((i + 1) % 15 == 0) return "FizzBuzz";
    if ((i + 1) % 3 == 0) return "Fizz";
    if ((i + 1) % 5 == 0) return "Buzz";
    return `${i + 1}`;
  });
};
