const { Schema, model } = require('mongoose');

const barberSchema = new Schema({

});







const Barber = model('Barber', barberSchema);

module.exports = Barber;