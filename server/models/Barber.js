const { Schema, model } = require("mongoose");

const barberSchema = new Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },

  specialties: [String],

  availability: [
    {
      day: String,
      startTime: String,
      endTime: String,
    },
  ],
});

const Barber = model("Barber", barberSchema);

module.exports = Barber;
