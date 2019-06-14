/**
 * judge is include some property
 * jackchow
 * 2019.06.13
 */
const type = require('./judgeType')

const judgeIncludeProp = (obj, prop) => {
    const myType = type(obj);
    switch (myType) {
        case 'object':
            return prop in obj
        case 'array':
            return obj.some(item => (type(item) === 'object' && (prop in item))||(type(item) !== 'object'))
        default:
            break;
    }
}

module.exports = judgeIncludeProp