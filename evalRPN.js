let num1, num2;
const operate = {
  "+": () => num1 + num2,
  "-": () => num1 - num2,
  "*": () => num1 * num2,
  "/": () => ~~(num1 / num2),
};
var evalRPN = function (tokens) {
  let stack = [];
  for (let el of tokens) {
    if (operate[el]) {
      num2 = stack.pop();
      num1 = stack.pop();
      stack.push(operate[el]());
    } else stack.push(~~el);
  }
  return stack[0];
};
