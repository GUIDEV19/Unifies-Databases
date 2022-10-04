const Options = require('../../config/ikap.js')
const Firebird = require('node-firebird')

class QuerysExame {

    static async selectExame(){

        return new Promise( (resolve, reject)=>{
            Firebird.attach(Options.dbOptions, function(err, db) {
        
                if (err){
                    reject(err);
                };
                // db = DATABASE
                 db.query('SELECT * FROM EXAMES;', function(err, result) {
                    
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
    console.log(await QuerysExame.selectExame())
}

teste()



module.exports =  QuerysExame