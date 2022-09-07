const unificar = require('../dbUnificar.js')
const fs = require('fs')
const dump = fs.readFileSync('C:/2022-09-02.sql', 'utf8')
async function restoreDump(){
    const t = await unificar.transaction();
    await unificar.query({
        query: dump,
        validate: true
    }, {transaction: t});
    await t.commit();
}

module.exports = restoreDump


//flags: '-FOUND_ROWS,MULTI_STATEMENTS',

/* const fs = require('fs')
const dump = fs.readFileSync('C:/2022-09-02.sql', 'utf8')
const mysql = require('mysql2');
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'unifica',
    port: 4914,
    password: '4hBbQNVymFQX',
    flags: 'MULTI_STATEMENTS'
});
async function restoreDump() {
        await connection.query(dump, function(err, results){
            console.log(err)
        })
        console.log('teste');
} */



/* module.exports = restoreDump */