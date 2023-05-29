const os = require('os');
const pl = os.platform();
console.log("Platform is", pl);
console.log("Total Memory", os.totalmem()); //gives RAM in bytes
console.log("Total Memory in GB", (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2), ' GB'); //gives RAM in GB
console.log("Free Memory", (os.freemem() / (1024 * 1024 * 1024)).toFixed(2), ' GB'); //gives in GB