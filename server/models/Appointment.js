const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({

});







const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;