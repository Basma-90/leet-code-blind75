/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); 
        } else {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false; 
            }
        }
    }

    return stack.length === 0; 
};
