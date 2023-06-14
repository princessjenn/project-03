const { Schema, model } = require("mongoose");

const specialtySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },

  price: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Specialty = model("Specialty", specialtySchema);

module.exports = Specialty;
