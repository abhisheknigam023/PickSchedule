const express = require("express");
const app = express();
const mongoose = require("mongoose");
var config = require("config");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// Require  routes
const routesApi = require("./app/route/api");

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Expose-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

/// -------- Start: Code for development environment ----------

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Functions DNA application."
  });
});

// configure  routes
app.use("/api", routesApi);

// listen for requests
app.listen(port, () => {
  console.log("Server is listening on port: ", port);
});

// Configuring the database
var dbConfig = config.get("DB");

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log(dbConfig.url);
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    if (err) {
      console.log("con - ", dbConfig.url);
      console.log("err - ", err);
      console.log("Could not connect to the database. Exiting now...");
      process.exit();
    }
  });

mongoose.set("useCreateIndex", true);

module.exports = app;
