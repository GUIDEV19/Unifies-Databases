const bodyParser = require('body-parser')
const cors = require('cors')
const zscanEvoRoutes = require('./zscanEvoRoutes.js')

module.exports = app => {
    
    app.use((req, res, next) =>{
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET', 'POST' )
        res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization, application/json')
        app.use(cors())
        
        next();
        
    });
    app.use(bodyParser.json());
    app.use(zscanEvoRoutes);
    app.get('/', (req, res) =>{
        res.send('olá!')
    })
}