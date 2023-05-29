class Emp {
    constructor(username, code) {
        this.username = username;
        this.code = code;
    }
}

const allEmp = [
    new Emp('vignesh', '0383'),
    new Emp('vignesh1', '1111'),
    new Emp('vignesh2', '2222')
];

exports.getRandomEmps = () => {
    return allEmp[Math.floor(Math.random() * allEmp.length)];
};

exports.allEmp = allEmp;