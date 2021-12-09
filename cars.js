var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var carSchema = new Schema({ 
    marca: String,
    modelo: String, 
    anoFabrico: Number,
    matricula: String,
    tipo: String,
    precoCompra: Number,
    dateCompra: { type: Date, default: Date.now },
    restauro: Number,
    precoVenda: Number,
});

module.exports = mongoose.model('car', carSchema);
