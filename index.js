const express = require('express');
const { request } = require('express');
const Joi = require('joi');
const app = express();
const mongoose = require('mongoose')


// autenticação Mongo
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://dbUser:ubi3000@cluster0.20n6j.mongodb.net/DataStore?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const dataStore = client.db("test").collection("DataStore");
  // perform actions on the collection object
  client.close();
});
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => { console.log("Conexão efectuada") }).catch(
  (err) =>{console.error(err.message)})

var Car = require('./cars.js');
 //Carro
	var newCar = new Car ({marca: "BMW", modelo: "A3", anoFabrico: 2000, matricula: "12-DA-25", tipo: "SUB", precoCompra: 2000,dateCompra: 2, restauro: 300,  precoVenda: 10000});

 //Save carro
	newCar.save( (err) => { 
		if (err) { 
			console.log("Oops Error")
            return;
		} 
		else  {
			  console.log("Ok Added new item ");
              return;
		}
    client.close();
  }); 
  Car.find( {modelo: "A3"}, 
    function (err, docs) {
        if (err){
            console.log(err);
            return;
        }
        docs.forEach( (x)=>console.log("Pilas"));
    }
    );
/*
app.use(express.json());

const courses = [
    {marca: "BMW", modelo: "A3", anoFabrico: 2000, matricula: "12-DA-25", tipo: "SUB", precoCompra: 2000,dateCompra, restauro: 300,  precoVenda: 10000},
    {marca: "AUDI", modelo: "A3", anoFabrico: 2010, matricula: "16-FE-7U", tipo: "SUB", precoCompra: 5000,dateCompra, restauro: 2000,  precoVenda: 15000}
];
app.get('/', (req, res) => {
	res.send('Hello world!!!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.post('/api/courses', (req, res) =>{
    //Chamer a função validar com o erro
    const { error } = validateCourse(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});

//DELETE
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt (req.params.id));
    if(!course) return res.status(404).send('The course with the given id was not found');

    //Delete part
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course); 
})



//PUT
app.put('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt (req.params.id));
    if(!course) return res.status(404).send('The course with the given id was not found');

    //Chamer a função validar com o erro
    const { error } = validateCourse(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    
    course.name = req.body.name;
    res.send(course);
});

//Função para validar a string
function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}


//Get para procurar ID de um array
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt (req.params.id));
    if(!course) return res.status(404).send('The course with the given id was not found');
    res.send(course);  
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
*/