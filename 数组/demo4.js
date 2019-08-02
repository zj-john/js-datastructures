/* 创建一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，构成一个单词 */
const CArray = require("./CArray");

const arr = new CArray();
arr.push("h");
arr.push("e");
arr.push("l");
arr.push("l");
arr.push("o");

console.log("word：", arr.join(""));