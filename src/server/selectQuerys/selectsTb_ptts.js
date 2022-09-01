const zscan_database  = require('../db.js')
const unificar = require('../dbUnificar.js')

async function  selectPttsUnificar(){
    const [pacientesUnificar] = await unificar.query(`select * from  tb_ptts as a inner join tb_cnts as b on a.ptts_code = b.cnts_code where a.ptts_dhcr >= "2022-07-01";`)
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