module.exports = function reverse (n) {
  n = Math.abs(n)
  let Array = String(n).split('');
  let resultArray = Array.reverse();
  let result = resultArray.join('');
  return result*1;
}
