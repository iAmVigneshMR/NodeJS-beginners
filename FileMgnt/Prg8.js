const { execSync } = require('child_process');

const drives = execSync(`df -H`).toString().trim(); // for linux
// const drives = execSync("wmic logicaldisk get caption").toString(); //for windows
console.log(drives);