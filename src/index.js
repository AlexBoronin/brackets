module.exports = function check(str, bracketsConfig) {
    const startBrackets = ['(', '{', '[', '|', '1', '3', '5', '7', '8'];
    const bracketsPair = {
        '(': ')',
        '{': '}',
        '[': ']',
        '|': '|',
        '1': '2',
        '3': '4',
        '5': '6',
        '7': '7',
        '8': '8',
    };
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (startBrackets.includes(str[i]) && bracketsPair[str[i]] === str[i + 1]) {
            i++
        } else if (bracketsPair[stack[stack.length - 1]] === (str[i])) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }
    return stack.length === 0;
}