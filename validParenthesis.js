const isValid = (s) => {
  let stack = [];
  for (let el of s) {
    if (el === "(") stack.push(")");
    else if (el === "{") stack.push("}");
    else if (el === "[") stack.push("]");
    else if (stack.pop() != el) return false;
  }
  return !stack.length;
};
