var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var carSchema = new Schema({ 
    id: Number,
    marca: String,
    modelo: String, 
    anoFabrico: Number,
    matricula: {type:String, required: true, unique: true},
    tipo: String,
    precoCompra: Number,
    dateCompra: { type: Date, default: Date.now },
    restauro: Number,
    precoVenda: Number,
});

module.exports = mongoose.model('car', carSchema);
