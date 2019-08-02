/* 将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词 */
const CArray = require("./CArray");

const arr = new CArray();
arr.push("hello");
arr.push("john");
arr.push("iris");
arr.push("world");
arr.push("happy");

console.log("正序：", arr.sort());
console.log("倒序：", arr.sort().reverse());