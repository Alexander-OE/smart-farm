const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  farmName: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
});

module.exports = User = model("User", userSchema);
