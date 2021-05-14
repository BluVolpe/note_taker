// Requiring express/http/fs to be used
const express = require("express");
const http = require("http");
const fs = require("fs");

// create an instance of express
const app = express();
const PORT = process.env.PORT || 3000;

// sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
// code to start the server
app.listen(PORT, () =>
  console.log(`Listening on PORT: http://localhost:${PORT}`)
);
