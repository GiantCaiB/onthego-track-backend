require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("./_helpers/jwt");
const errorHandler = require("./_helpers/error_handler");
const awake = require("./_helpers/awake");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/job", require("./routes/jobRoutes"));

// global error handler
app.use(errorHandler);

// wake heroku app every 30 minutes
awake.wakeUp(1800000);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
