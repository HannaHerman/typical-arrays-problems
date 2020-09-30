
exports.min = function min (array) {
  let minVal = 0;
  if (array === undefined || array.length === 0) {
    return minVal;
  }
  else {
    array = array.sort(sortNumbers);
    minVal = array[0];
    return minVal;
  }
  
  function sortNumbers(a, b) {
    if (a > b) {
      return 1;
    } 
    else if (b > a) {
      return -1;
    } 
    else {
      return 0;
    }
  }
}

exports.max = function max (array) {
  let maxVal = 0;
  if (array === undefined || array.length === 0) {
    return maxVal;
  }
  else {
    array = array.sort(sortNumbers);
    maxVal = array[array.length - 1];
    return maxVal;
  }
  
  function sortNumbers(a, b) {
    if (a > b) {
      return 1;
    } 
    else if (b > a) {
      return -1;
    } 
    else {
      return 0;
    }
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  else {
    return array.reduce((a, b) => (a + b)) / array.length;
  }
}
