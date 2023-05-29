const os = require('os');
//Time of OS is running
const up1 = os.uptime();
let hours = Math.floor(up1 / 3600);
let min = Math.floor(up1 % 3600) / 60;

console.log("Hours : ", hours, "Minutes : ", min);
console.log("In Seconds : ", up1);