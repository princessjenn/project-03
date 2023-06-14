const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
    id: {
        type: Int,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    barberId: {
        type: INT,
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
        type: Date,
        required: true,
    },
    time: {
        type: TimeRanges,
        required: true,
        unique: true,
    },


});







const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;