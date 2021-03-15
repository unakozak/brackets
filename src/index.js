module.exports = function check(str, bracketsConfig) {
    if (notOdd(str) || isOpenedBracketOnTop(str) || isClosedBracketOnTop(str))
        return false;

    let bracketsStack = [];
    let brackets = {
        "(": ")",
        "[": "]",
        "{": "}",
        "|": "|",
        1: "2",
        3: "4",
        5: "6",
        7: "7",
        8: "8",
    };

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "(" ||
            str[i] === "[" ||
            str[i] === "{" ||
            str[i] === "1" ||
            str[i] === "3" ||
            str[i] === "5"
        )
            bracketsStack.push(str[i]);
        else {
            if (str[i] === "|" || str[i] === "7" || str[i] === "8") {
                if (bracketsStack.length == 0) bracketsStack.push(str[i]);
                else {
                    let last = bracketsStack.pop();
                    if (last !== str[i]) {
                        bracketsStack.push(last);
                        bracketsStack.push(str[i]);
                    }
                }
            } else if (str[i] !== brackets[bracketsStack.pop()]) return false;
        }
    }
    if (bracketsStack.length > 0) return false;
    return true;
};

function notOdd(str) {
    return str.length % 2 !== 0 ? true : false;
}

function isOpenedBracketOnTop(str) {
    return (
        str[str.length - 1] === "(" ||
        str[str.length - 1] === "{" ||
        str[str.length - 1] === "["
    );
}

function isClosedBracketOnTop(str) {
    return str[0] === ")" || str[0] === "}" || str[0] === "]";
}
