const Sequelize = require('sequelize');

const sequelize2 = new Sequelize('unifica','root', '4hBbQNVymFQX',{
    port: '4914',
    host: 'localhost',
    dialect: 'mysql'
})

sequelize2.authenticate().then(function(){
    const db2 = 'banco de unificação'
    console.log('Conexão realizada com sucesso em ' + db2);
}).catch(function(err){
    console.log('erro ao realziar a conexão com DB: ' + err)
}) 

module.exports = sequelize2