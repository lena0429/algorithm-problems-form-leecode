function BracketMatcher(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            stack.push("(");
        } else if (str[i] === ")") {
            if (stack.length === 0) {
                return 0;
            } else {
                stack.pop()
            }
        }
    }
    // after we are done all the elements, if the stack is empty we will return 1 otherwise we will return 0;
    return stack.length === 0 ? 1 : 0;  
}