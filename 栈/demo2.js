/* 后缀表达式：op1 op2 operator  2个栈，一个存操作数，一个存操作符，设计js函数，将中缀表达式转换为后缀表达式，并利用栈求值*/
const Stack = require("./Stack");

const op_stack = new Stack();
const operator_stack = new Stack();

const s = "1+2-3*2+12"
// 只考虑2元yuns
const operator_list = ["+", "-", "*", "/", "%"];
const priority = {
    "+": 0,
    "-": 0,
    "*": 1,
    "/": 1,
    "%": 1
}

for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (operator_list.includes(item)) {
        operator_stack.push(item);
    } else {
        op_stack.push(item);
    }
}

console.log(op_stack);
console.log(operator_stack);

const PostfixExpression = function (s) {
    let res = "";
    let operator_stack = new Stack();
    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        if (operator_list.includes(item)) {
            if (operator_stack.length() !== 0) {
                let peek = operator_stack.peek();
                while(operator_stack.length() !== 0 && priority[peek] >= priority[item]) {
                    res += peek;
                    operator_stack.pop();
                    peek = operator_stack.peek();
                }
            }
            operator_stack.push(item);
        } else {
            res += item;
        }
    }
    while (operator_stack.length() != 0) {
        res += operator_stack.peek();
        operator_stack.pop();
    }
    return res;
}

const calc = function () {
    let res = 0;
    for (let i = 0; i < operator_stack.length(); i++) {
        let op1 = op_stack.peek();
        op_stack.pop();
        let op2 = op_stack.peek();
        op_stack.pop();
        let operator = operator_stack.peek();
        operator_stack.pop();
        res += eval(op1 + operator + op2);
    }
    return res;
}

const result = calc();
const postfix_expression = PostfixExpression(s);
console.log(result, postfix_expression);

