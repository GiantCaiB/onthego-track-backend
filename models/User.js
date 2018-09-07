const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  admin: {type: Boolean, default: false},
  createdDate: { type: Date, default: Date.now }
});

userSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("User", userSchema);
