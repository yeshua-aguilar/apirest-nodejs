const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestauranteSchema = new Schema({
    name: {type: String},
    descripcion: {type: String},
    imagen: {type: String},
    boton: {type: String}
});

module.exports = Rest = mongoose.model('Rest', RestauranteSchema);