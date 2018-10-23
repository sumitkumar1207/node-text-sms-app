const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const Nexmo = require("nexmo");

//Initialize the nexmo to the app
const nexmo = new Nexmo(
  {
    apiKey: "b73c2ee9",
    apiSecret: "6u25cA2XO8pkVZkx"
  },
  { debug: true }
);

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
  // res.send(req.body);
  // console.log(req.body);
  const number = req.body.number;
  const text = req.body.text;

  nexmo.message.sendSms(
    "MyTestNumber",
    number,
    text,
    { type: "unicode" },
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
  );
});

//Defining the port
const port = 3000;

//Connect to the server
const server = app.listen(port, () =>
  console.log(`Server started on the port ${port}`)
);
