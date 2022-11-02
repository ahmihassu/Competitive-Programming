var MinStack = function () {
  this.item = [];
};

MinStack.prototype.push = function (val) {
  this.item.push({
    value: val,
    min: this.item.length === 0 ? val : Math.min(val, this.getMin()),
  });
};

MinStack.prototype.pop = function () {
  this.item.pop();
};

MinStack.prototype.top = function () {
  return this.item[this.item.length - 1].value;
};

MinStack.prototype.getMin = function () {
  return this.item[this.item.length - 1].min;
};
