//1st method
// const em = require('./aggregate/index'); 
// console.log([em.allEmp, em.getRandomEmps()]);

//2nd method
// const { allEmp, getRandomEmps } = require('./aggregate/index');
// console.log([allEmp, getRandomEmps()])

const { allEmp, getRandomEmps } = require('aggregate/index');
console.log([allEmp, getRandomEmps()])