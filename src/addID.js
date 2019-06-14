/**
 * addID
 * zhouyang20
 * 2019.06.13
 */
const deepClone = require('./utils/deepClone');
const generateID = require('./utils/generateID');
const judgeIncludeProp = require('./utils/judgeIncludeProp');
const judgeType = require('./utils/judgeType');

const addID = (obj = '', IDName = '') => {
    obj = deepClone(obj);
    const myIDName = IDName || 'id';
    const objType = judgeType(obj);
    //the first param obj is must 
    if (obj !== '' && (objType === 'object' || objType === 'array')) {
        //before add ID,we must be sure that the obj not include myIDName
        if (!judgeIncludeProp(obj, myIDName)) {
            switch (objType) {
                case 'object':
                    obj[myIDName] = generateID();
                    return obj;
                case 'array':
                    obj = obj.map(item => {
                        item[myIDName] = generateID()
                        return item
                    });
                    return obj;
                default:
                    return obj
            }
        } else {
            return obj
        }
    }
}


module.exports = addID