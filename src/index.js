
exports.min = function min (array) {
  const newData = checkArray(array);
  return Math.min(...newData);
}

exports.max = function max (array) {
  const newData = checkArray(array);
  return Math.max(...newData);
}

exports.avg = function avg (array) {
  const newData = checkArray(array);
  return newData.reduce((sum, n) => sum += n)/newData.length;
}


// 
const checkArray = (array) => {
  let arr = array || [0];
  arr = arr.length >= 1 ? arr : [0];
  return arr;
}