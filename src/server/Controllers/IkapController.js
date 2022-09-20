const Firebird = require('node-firebird')
const Options = require('../config/ikap.js')

/* const dbOptions = {
    host: '127.0.0.1',
    port: 3053,
    database: 'C:\\BANCO\\BASER.FDB',
    user: 'SYSDBA',
    password: 'masterkey',
    role: null,
    pageSize: 4096,
    timeout: 3000,
    lowercase_keys: true,
    retryConnectionInterval: 100
} */


class RoutesIkapMigration{

    static async pesquisaPacientes(req, res){

        Firebird.attach(Options.dbOptions, function(err, db) {
            
            if (err){
                return res.status(500).json(err);
            };
            // db = DATABASE
            db.query('SELECT * FROM PACIENTES;', function(err, result) {
                
                db.detach();
                if (err){
                    return res.status(500).json(err);
                } else{
                    
                    return res.status(200).json(result);
                };
            });
        });
    };

};

module.exports = {
    RoutesIkapMigration
}