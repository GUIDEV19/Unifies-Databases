const Firebird = require('node-firebird')
const Options = require('../config/ikap.js')

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