
exports.min = function min (array) {
    if (typeof array === 'undefined' || array.length === 0) {
  return 0;
}
        let min = array[0] 
    array.forEach(number => {
        if (min > number) {
            min = number
        }
    })
  return min;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
