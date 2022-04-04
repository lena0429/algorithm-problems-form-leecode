const isPalindrome = (x) => {
    if (x < 0) return false

    let reversed = 0, y = x

    while (y > 0) {
        const lastDigit = y % 10
        reversed = (reversed * 10) + lastDigit
        y = (y / 10) | 0
    }
    return x === reversed
};

console.log(isPalindrome(232))
console.log(isPalindrome(132))