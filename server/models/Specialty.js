const { Schema, model } = require('mongoose');

const specialtySchema = new Schema({

});







const Specialty = model('Specialty', specialtySchema);

module.exports = Specialty;