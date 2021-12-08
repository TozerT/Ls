var mongoose = require('mongoose');

// note: your host/port number may be different! 
//mongoose.connect('mongodb://localhost:27017/myDatabase');

uri=".."
mongoose.connect(uri);

var Schema = mongoose.Schema;

var carSchema = new Schema({ 
    marca: String,
    modelo: String, 
    anoFabrico: Number,
    matricula: {Number,required: true, unique: true},
    tipo: String,
    precoCompra: Number,
    dateCompra: { type: Date, default: Date.now },
    restauro: Number,
    precoVenda: Number,
});

module.exports = mongoose.model('car', carSchema);
