const { Schema, model } = require("mongoose");

const AppointmentSchema = new Schema({
  date: {
    type: Date,
  },
  time: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Appointment", AppointmentSchema);
