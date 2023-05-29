const d = require('diskusage');
const os = require('os');

let path = os.platform() === 'win32' ? 'c:' : '/';

// getDiskInfo(path);
// getDiskInfo('D:\\');
// async function getDiskInfo(drive) {
//     const info = await d.check(drive);
//     console.log(info.total);
// }

// Callbacks
disk.check(path, function (err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log(info.available);
        console.log(info.free);
        console.log(info.total);
    }
});

// Promise
async function getFreeSpace(path) {
    try {
        const { free } = await disk.check(path);
        console.log(`Free space: ${free}`);
        return free
    } catch (err) {
        console.error(err)
        return 0
    }
}

// Or without using async/await
disk.check(path)
    .then(info => console.log(`free: ${info.free}`))
    .catch(err => console.error(err))

// Synchronous
try {
    let info = disk.checkSync(path);
    console.log(info.available);
    console.log(info.free);
    console.log(info.total);
}
catch (err) {
    console.log(err);
}