const Options = require('../../config/ikap.js')
const Firebird = require('node-firebird')

class QuerysPacientes {

    static async selectPacientes(){

        return new Promise( (resolve, reject)=>{
            Firebird.attach(Options.dbOptions, function(err, db) {
        
                if (err){
                    reject(err);
                };
                // db = DATABASE
                 db.query('SELECT * FROM PACIENTES;', function(err, result) {
                    
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

async function teste(){
    console.log(await QuerysPacientes.selectPacientes())
}

teste()



module.exports =  QuerysPacientes

