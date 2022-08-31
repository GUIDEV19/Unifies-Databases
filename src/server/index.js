const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const iniciar = require('./entidades/index.js')
const {zscan_database, unificar}  = require('./db.js')





app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET', 'POST' )
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization')
    app.use(cors())
    next();
    
})




app.use(bodyParser.json())


app.listen(8080, () => console.log('Seervidor iniciado'))


//routes



app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/iniciar', async function(req, res){
    try{
        iniciar()
        return res.status(200).send({
                    message: 'Iniciado processo'
                });
    }catch(erro){
        return res.status(500).send({
            message: 'Erro ao iniciar processo'
        });
    }
})


module.exports = app;
