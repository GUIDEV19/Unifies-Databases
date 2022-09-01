const zscan_database  = require('../db.js')

//A função de pesquisa para obter os dados da tb_cnts esta localizada em selectsTb_ptts.js

async function selectIdCntsZscanDatabase(){
    const [cnts_id] = await zscan_database.query('SELECT cnts_code FROM tb_cnts ORDER BY cnts_code desc limit 1;');
    return cnts_id
}

module.exports = {
    selectIdCntsZscanDatabase
}