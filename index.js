const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('./api/users');
const Rests = require('./api/restaurantes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', Users);
app.use('/api/rest', Rests);


const port = process.env.PORT || 4000;


mongoose.connect('mongodb://yeshua:yeshua2@ac-a8gqmio-shard-00-00.ypwvpkm.mongodb.net:27017,ac-a8gqmio-shard-00-01.ypwvpkm.mongodb.net:27017,ac-a8gqmio-shard-00-02.ypwvpkm.mongodb.net:27017/?ssl=true&replicaSet=atlas-xrugto-shard-0&authSource=admin&retryWrites=true&w=majority', 
    { useNewUrlParser: true }, (err, res) => {
    err && console.log("Error conectando a la base de datos");
    app.listen(port, () => {
        console.log(`Servidor corriendo en ${app.get('port')}`);
    });
});