const fs = require("fs");
const path = require("path");

//require uuid so that it will assign the notes random ids
const { v4:uuidv4 } = require("uuid");
//require the database json file
let notesDB = require("../db/db.json");

module.exports = (app) => {
  //return the json version of notesDB to the url/api/notes
  app.get("/api/notes", (req, res) => {
    return res.json(notesDB);
  });

  app.post("/api/journals", function (req, res) {
    journalData.push(req.body);
    res.json("saved");
  });

  //post the notes
  app.post("/api/notes", (req, res) => {
    console.log("req.body when it first arives at /api/notes")
    console.log(req.body);
    //assign each note a random id
    req.body.id = uuidv4();
    console.log("after req.body.id = uuidv4()")
    console.log(req.body)
    //push the notes onto the page
    notesDB.push(req.body);
    //stringify notes db, check for an error
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notesDB),
      function (err) {
        if (err) throw err;
        console.log(notesDB);
        console.log(__dirname);
        res.json(notesDB);
      }
    );
  });
};
