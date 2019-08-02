/* 
散列
下面的散列基于数组构建，所有元素根据和该元素对应的键，保存在数组的特定位置。理想情况下，散列函数会将每个键值映射为一个唯一的数组索引。
但数组的长度有限，键的数量无限，所以现实的目标是让散列函数尽量均匀地映射在数组中。
碰撞：多个键映射成同一个值
数组大小：数组长度应该为一个质数
 */

 /* 
简单hash：
缺点：分布不均匀，散列碰撞
 */

class HashTable {
    constructor() {
        this.table = new Array(137);
    }

    put(data) {
        var pos = this.simpleHash(data);
        this.table[pos] = data;
    }

    // 将字符串中每个字符的ASCII码值相加
    simpleHash(data) {
        var total = 0;
        for (var i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        print("Hash value: " + data + " -> " + total);
        return total % this.table.length;
    }

    showDistro() {
        var n = 0;
        for (var i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                print(i + ": " + this.table[i]);
            }
        }
    }
}

module.exports = HashTable;