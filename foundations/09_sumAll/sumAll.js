const sumAll = function(a, b) {
    if ((!Number.isInteger(a) || a <= 0) || (!Number.isInteger(b) || b <= 0)) return `ERROR`;

    let low = 0;
    let high = 0;

    if (a < b) {
        low = a;
        high = b;
    } else {
        low = b;
        high = a;
    }

    let sum = 0;
    for (let i = low; i <= high; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
