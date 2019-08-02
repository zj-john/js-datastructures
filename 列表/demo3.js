/* 创建person类，用于保存人的姓名和性别，写一个函数显示列表中拥有相同性别的人 */
const List = require("./List");

class Person extends List {

    showSameSex() {
        let mList = [];
        let fList = [];
        this.dataStore.forEach((item)=>{
            item.sex === 'm' ? mList.push(item.name) : fList.push(item.name)
        })
        console.log("sex m: ", mList);
        console.log("sex f: ", fList);
    }
}

const person = new Person();
person.append({
    name: "john",
    sex:"m"
})
person.append({
    name: "weer",
    sex:"m"
})
person.append({
    name: "david",
    sex:"m"
})
person.append({
    name: "vivian",
    sex:"f"
})
person.append({
    name: "iris",
    sex:"f"
})
person.showSameSex();