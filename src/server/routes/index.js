const bodyParser = require('body-parser')
const cors = require('cors')
const zscanEvoRoutes = require('./zscanEvoRoutes.js')
const ikapRoutes = require('./ikapRoutes.js')


module.exports = app => {
    
/*     app.use((req, res, next) =>{
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET', 'POST' )
        res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization, application/json')
        next();
        
    }); */
    app.use(cors())
    app.use(bodyParser.json());
    app.use(zscanEvoRoutes, ikapRoutes);
    app.get('/', (req, res) =>{
        res.send('olá!')
    })
}