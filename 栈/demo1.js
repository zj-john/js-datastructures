/* 判断算术表达式中的括号是否匹配 */

const Stack = require("./Stack");

const isMatch = function(input) {
    const matchstack = new Stack();
    for(let i = 0; i < input.length; i++) {
        let s = input[i];        
        if(s==='(') {
            matchstack.push(s);
        } else if(s === ')') {
            if(matchstack.length() != 0) {
                const peek = matchstack.peek();
                if(peek == '(') {
                    matchstack.pop();
                } else {
                    return false;
                }    
            } else {
                return false;
            }    
        }
    }
    if(matchstack.length() == 0) {
        return true;
    } else {
        return false;
    }
}

const input = "2.3+23/12+(3.14159*0.24";
const res = isMatch(input);
console.log("result is:", res);