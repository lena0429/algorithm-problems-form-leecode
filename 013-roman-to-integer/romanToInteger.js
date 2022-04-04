const romanToInteger = (string) => {
    const romans = {
        I: 1,
        IV: 4, 
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }

    let total = 0;
    let idx = 0;

    while (idx < string.length) {
        const twoChar = string[idx] + (string[idx + 1] || "")

        if (romans[twoChar] !== undefined) {
            total += romans[twoChar];
            idx += 2
        } else {
            total += romans[string[idx]]
            ++idx
        }
    }

    return total;
}

console.log("Expecting: 9");
console.log(romanNumeral('IX'));

console.log("");

console.log("Expecting: 402");
console.log(romanNumeral('CDII'));