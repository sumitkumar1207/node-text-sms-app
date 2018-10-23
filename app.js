const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//Initialize the app
const app = express();

//Setting up template engine
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

//Setting up public folder
app.use(express.static(__dirname + "/public"));

//BodyParser middlewarwe
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Catching response on form submittion
app.post("/", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});
//Defining the port
const port = 3000;

//Connect to the server
const server = app.listen(port, () =>
  console.log(`Server started on the port ${port}`)
);
