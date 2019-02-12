require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Habilitar la carpeta public
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));


// Configuracion Global de Rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true })
    .then(res => console.log("Base de datos ONLINE"))
    .catch(err => console.log(err));


app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto:", process.env.PORT);
});

//