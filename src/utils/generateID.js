/**
 * generate ID method
 * zhouyang20
 * 2019.06.13
 */

const generateID = () => Number(Math.random().toString().substr(3, 5) + Date.now()).toString(36);

module.exports = generateID 

