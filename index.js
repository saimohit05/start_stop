const express = require('express');
const { spawn } = require('child_process');
let child = null;
const port = process.env.PORT || 3000;

let app = express();
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html"); // 👈this is here for my testing purpose as I did not wanted to setup a full react app
});

app.get("/start", (req, res) => {
    child = spawn(`node`, [__dirname + "/insert.js"]);
    child.on("error", (err) => {
        console.log(err);
    })
    res.send({ pid: child });      
});

app.get("/kill", (req, res) => {
    child.stdin.pause();
    child.kill();
    res.send("Done");
});

app.get("/delete", (req, res) => {
    child = spawn(`node`, [__dirname + "/delete.js"]);
    child.on("error", (err) => {
        console.log(err);
    })
    res.send("DONE");      
});

app.get("/total", (req, res) => {
    child = spawn(`node`, [__dirname + "/total.js"]);
    child.on("error", (err) => {
        console.log(err);
    })
    res.send("Total Done");      
});

app.listen(port, () => { });


//git init
//git add . 
//git commit -m “first commit”
//git push — set-upstream origin master
//git remote add origin https://github.com/pallavisharma26/DemoApp
//git push — set-upstream origin master