/**
 * judge types
 * jackchow
 * 2019.06.14
 */
let class2type = {};
// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})
const type = (obj) => {
    // 一箭双雕
    if (obj == null) {
        return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}

module.exports = type

