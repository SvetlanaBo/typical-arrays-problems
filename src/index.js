
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
    if (typeof array === 'undefined' || array.length === 0) {
  return 0;
}
    let max = array[0] 
    array.forEach(number => {
        if (max < number) {
            max = number
        }
    })
    return max;
}

exports.avg = function avg (array) {
  return 0;
}
