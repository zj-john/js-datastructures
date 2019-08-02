/* 记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法 */
const CArray = require("./CArray");

class Score extends CArray{
    constructor() {
        super();
    }

    addScore(score) {
        this.push(score);
    }

    avarage() {
        let sum = 0;
        sum = this.reduce((sum, item) => {            
            return sum + item
        });
        return sum/this.dataStore.length;
    }
}

const score = new Score();
score.addScore(90);
score.addScore(92);
score.addScore(83);
score.addScore(93);
score.addScore(85);
const avarage = score.avarage();
console.log(avarage);