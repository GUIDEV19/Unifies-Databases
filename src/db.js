const Sequelize = require('sequelize');

const sequelize = new Sequelize('zscan_database','root', '4hBbQNVymFQX',{
    port: 4914,
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    let db = 'zscan_database'
    console.log('Conexão realizadad com sucesso em ' + db);
}).catch(function(err){
    console.log('erro ao realziar a conexão com DB: ' + err)
}) 



module.exports = sequelize
