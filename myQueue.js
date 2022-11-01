var MyQueue = function () {
  this.item = [];
  this.first = 0;
  this.last = 0;
};

MyQueue.prototype.push = function (x) {
  this.item[this.last] = x;
  this.last++;
};

MyQueue.prototype.pop = function () {
  if (this.item.length === 0) return undefined;
  let deletedItem = this.item[this.first];
  this.first++;
  return deletedItem;
};

MyQueue.prototype.peek = function () {
  return this.item[this.first];
};

MyQueue.prototype.empty = function () {
  if (this.first >= this.item.length) return true;
  else return false;
};
