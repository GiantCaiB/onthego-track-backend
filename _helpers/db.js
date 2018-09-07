const mongoose = require("mongoose");
const keys = require("../config/keys");
mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;

module.exports = {
    User: require("../models/User"),
    Job: require("../models/Job")
};
