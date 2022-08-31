const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const {zscan_database, unificar}  = require('./db.js')





app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET', 'POST' )
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization')
    next();
    
})



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.listen(8080, () => console.log('Seervidor iniciado'))


//routes





app.post('https://localhost:4514/api/auth', async function(req, res){
    try{
        const user = {
            "login": "doctor",
            "pass": "123"
        }
        const usuario = user
        const token = await zscan_database.findOne(usuario);
        res.status(200).send(JSON.stringify(token))
    }catch(erro){

    }
})


module.exports = app;
