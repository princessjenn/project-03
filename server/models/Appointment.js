const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  barberId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  barberName: {
    type: String,
    required: true,
    unique: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
