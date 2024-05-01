const { Schema, model } = require("mongoose");

const farmSchema = new Schema({
  farmAddress: String,
  farmField: String,
  farmOption: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = model("Farm", farmSchema);
