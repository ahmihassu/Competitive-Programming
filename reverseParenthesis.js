var reverseParentheses = function (s) {
  let stack = [[]];
  for (let el of s) {
    if (el === "(") {
      stack.push([]);
    } else if (el === ")") {
      let current = stack.pop().reverse();
      stack[stack.length - 1].push(...current);
    } else {
      stack[stack.length - 1].push(el);
    }
  }
  return stack[0].join("");
};
