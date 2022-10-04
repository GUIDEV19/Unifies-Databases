const Options = require('../../config/ikap.js')
const Firebird = require('node-firebird')

class QuerysModelo {

    static async selectModelo(){

        return new Promise( (resolve, reject)=>{
            Firebird.attach(Options.dbOptions, function(err, db) {
        
                if (err){
                    reject(err);
                };
                // db = DATABASE
                 db.query('SELECT * FROM MODELOS;', function(err, result) {
                    
                    db.detach();
                    if (err){
                        reject(err);
                    } else{
                        resolve(result);
                    };
                    
                });
            });
        })
        
    }
        
}

module.exports =  QuerysModelo