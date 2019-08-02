/* weekTemps 对象 用二位数组来存储每月的有用数据，增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数 */
const CArray = require("./CArray");

class weekTemps extends CArray{
    constructor() {
        super();
        this.monthData = this.metrix();
    }
}
