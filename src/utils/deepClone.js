/**
 * deep copy
 * jackchow
 * 2019.06.14
 */
const deepCopy = function(obj) {
    if (typeof obj !== 'object') return;
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}

module.exports = deepCopy