const os = require('os');
os.cpus().forEach((cpu, index) => {
    console.log("CPU : ", index + 1);
    console.log("Modal : ", cpu.model);
    console.log("Speed : ", cpu.speed);
    // "Times" will be displayed in milliseconds
    console.log("Times : ", cpu.times);
    console.log("Used Times : ", cpu.times.user);
    console.log("Idle Times : ", cpu.times.idle);
    console.log("System Times : ", cpu.times.sys);
});