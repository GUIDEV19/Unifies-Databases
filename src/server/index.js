const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const iniciar = require('./services/migrationZscanEvo.js')






app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET', 'POST' )
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization, application/json')
    app.use(cors())
    next();
    
})




app.use(bodyParser.json())


app.listen(8080, () => console.log('Seervidor iniciado'))


//routes



app.get('/', function(req, res) {
    res.send('hello world');
});

/* app.get('/iniciar/:path', async function(req, res, next){
    try{
        var path = req.params.path
        iniciar(path)
        var teste =  res.status(200).send({
                    message: 'Iniciado processo'
                });
        return teste
    }catch(erro){
        return res.status(500).send({
            message: 'Erro ao iniciar processo'
        });
    }
}); */


app.post('/iniciar',  (req, res) =>{
    const caminho = path.resolve(req.body.caminho)
    console.log(caminho)
    iniciar(caminho) 
    var teste =  res.status(200).send({
        message: 'Iniciado processo'
    });
    return teste
})


module.exports = app;
