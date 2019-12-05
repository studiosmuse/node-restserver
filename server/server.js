require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Configuracion global de rutas
app.use(require('./routes/index'));
 
// mongoose.connect('mongodb://localhost:27017/cafe',
    mongoose.connect(process.env.urlDB,   
    { useNewUrlParser: true, useCreateIndex: true },

    (err, res) => {


    if(err) throw err;
    
    console.log('Base de Datos Online');

});
 
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', 3000);
});