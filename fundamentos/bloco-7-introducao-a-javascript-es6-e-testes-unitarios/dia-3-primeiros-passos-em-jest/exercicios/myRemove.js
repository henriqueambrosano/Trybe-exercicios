const myRemove = (arr, item) => {
  if (arr.indexOf(item) === -1) {
    return arr;
  }
  arr.splice(arr.indexOf(item), 1);
  return arr;
};

module.exports = myRemove;
