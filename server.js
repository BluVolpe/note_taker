const express = require("express");
const http = require("http");
const fs = require("fs");

const app = express();
const server = http.Server(app);

// app.get("/", function (req, res) {
//     res.send(JSON.parse(fs.readFileSync("./db/db.json")));
// })

app.get("/", function (req, res) {
  res.sendFile("./public/index.html");
});

server.listen(3001, function () {
  console.log("now listening");
});
