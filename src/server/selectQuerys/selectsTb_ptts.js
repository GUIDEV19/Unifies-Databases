const zscan_database  = require('../config/db.js')
const unificar = require('../config/dbUnificar.js')


//A função selectPttsUnifica faz um inner Join com tb_cnts e aproveita esse inner join para inserir os dados de contatos do paciente
async function  selectPttsUnificar(date){
    const [pacientesUnificar] = await unificar.query(`select * from  tb_ptts as a inner join tb_cnts as b on a.ptts_code = b.cnts_code where a.ptts_dhcr >= "${date}";`)
    return pacientesUnificar
}  

async function selectIdPttsZscanDatabase(){
    const [idpaciente] = await zscan_database.query(`SELECT ptts_code FROM tb_ptts ORDER BY ptts_code desc limit 1;`);
    return idpaciente
}

module.exports = {
    selectIdPttsZscanDatabase,
    selectPttsUnificar
}