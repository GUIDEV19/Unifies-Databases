const Options = require('../../config/ikap.js')
const Firebird = require('node-firebird')

class QuerysPacientes {
    static async selectPacientes(){
        try{
            Firebird.attach(Options.dbOptions, function(err, db) {
            
                if (err){
                    return console.log(err);
                };
                // db = DATABASE
                db.query('SELECT * FROM PACIENTES;', function(err, result) {
                    
                    db.detach();
                    if (err){
                        return console.log(err);
                    } else{
                        return result;
                    };
                });
            });
        }catch (err){
            return console.log(err.json())
        }
        
    }
}

module.exports =  QuerysPacientes

