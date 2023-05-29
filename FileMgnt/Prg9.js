const { execSync } = require('child_process');
const d = require('diskusage');

const drives = execSync('df -H').toString();
for (const drive of drives) {
    getDiskInfo(drive);
    console.log(drive);
}

async function getDiskInfo(drive) {
    const info = await d.check(drive);
    console.log(info.total);
}