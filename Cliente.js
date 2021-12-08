var mongoose = require('mongoose');

// note: your host/port number may be different! 
//mongoose.connect('mongodb://localhost:27017/myDatabase');

uri="mongodb://<u>:<p>@cluster0-shard-00-00-wf0fk.mongodb.net:27017,cluster0-shard-00-01-wf0fk.mongodb.net:27017,cluster0-shard-00-02-wf0fk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
mongoose.connect(uri);


var Schema = mongoose.Schema;

var clienteSchema = new Schema({ 
  name: {type: String, required: true, unique: true}, 
  
});

module.exports = mongoose.model('cliente', clienteSchema);