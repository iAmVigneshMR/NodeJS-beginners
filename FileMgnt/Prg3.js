const os = require('os');
// console.log("Network Interfaces : ", os.networkInterfaces());
let network = os.networkInterfaces();
// // for (const i in network) {
// //     console.log(network[i].address);
// // };
// network.lo.forEach(element => {
//     console.log("lo : ", element.address);
// });
// network.wlp0s20f3.forEach(element => {
//     console.log("wlp0s20f3 : ", element.address);
// });

let networkInterfacesCount = 0;
for (let key in network) {
    let netInfos = network[key];
    netInfos.forEach(element => {
        networkInterfacesCount++;
        for (let attr in element) {
            attr === 'address' && console.log(attr + " : " + element[attr]);
            // console.log(attr + " : " + element[attr]);
        }
    });
}