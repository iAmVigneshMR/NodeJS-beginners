const express = require('express');
const uid = require("uuid"); //auto generated Id

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
let users = require("./users.json");
app.get("/", (req, res) => {
    res.json(users);
});
app.get("/:id", (req, res) => { //get with id method
    const u = users.some(user => user.id === parseInt(req.params.id)); //checkng the id
    if (u) {
        res.json(users.filter(user => user.id === parseInt(req.params.id))); //filtering the id
    }
    else {
        res.sendStatus(400);
    }
});

app.post("/", (req, res) => {
    console.log(req.body)
    const newuser = {
        id: getAutoNo(),
        name: req.body.name,
        mail: req.body.mail,
    };
    if (!newuser.name || !newuser.mail) {
        return res.sendStatus(400);
    }
    users.push(newuser);
    res.json(users);
});

app.put("/:id", (req, res) => {
    const u = users.some(user => user.id === parseInt(req.params.id));
    if (u) {
        const upuser = req.body;
        console.log(upuser)
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = upuser.name ? upuser.name : user.name;
                user.mail = upuser.mail ? upuser.mail : user.mail;
                res.json({ msg: "User Updated", user });
            }
        })
    } else {
        res.sendStatus(400);
    }
});

app.delete("/:id", (req, res) => {
    const u = users.some(user => user.id === parseInt(req.params.id));
    if (u) {
        let deletedUser = users.filter(user => user.id === parseInt(req.params.id));
        res.json({ msg: "User Deleted", deletedUser });
    } else {
        res.sendStatus(400);
    }
})

app.listen(3000, () => console.log('Server Started'));

function getAutoNo() {
    cnt = users[users.length - 1].id;
    cnt++;
    return cnt;
}