const removeFromArray = function(arr, ...rest) {
    return arr.filter(num => !rest.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
