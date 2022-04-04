const longestCommonPrefix = (strs) => {
    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        // loop through all the characters from the very first string
        const char = strs[0][i]
        
        for (let j = 0; j < strs.length; j++) {
            // loop through all the other strings in the array
            if(strs[j][i] !== char) return prefix;
        }
        prefix = prefix + char
    }

    return prefix;
} 