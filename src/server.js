const express = require('express');
const app = express();
const cors = require('cors');
const _var = require('./global/_var');

/********** Dependecy *********/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/********** Routes *********/

const route = require('./routes/dataOccidental.routes')


app.listen(_var.PORT, (err) => {
    if(err) throw err;
    console.log(`Servidor inicializado en el puerto: http://localhost:${_var.PORT}`);
})

app.use(route)