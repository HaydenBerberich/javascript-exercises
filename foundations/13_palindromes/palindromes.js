const palindromes = function (str) {
    const letters = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    const reversed = letters.split("").reverse().join("");

    return letters === reversed;
};

// Do not edit below this line
module.exports = palindromes;
