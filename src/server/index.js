const express = require('express')
const routes = require('./routes/index.js')

const app = express();


routes(app)

app.listen(8080, () => console.log('Servidor iniciado'))


module.exports = app;
