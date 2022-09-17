const zscan_database  = require('../config/db.js')
const unificar = require('../config/dbUnificar.js')

//A pesquisa selectTb_exam_tb_ptltUnificar também é utilizada para migrar exames
async function selectTb_exam_tb_ptltUnificar(){
    const [tb_exam_tb_ptlt] = await unificar.query(`select * from tb_tplt as a inner join tb_exam as b on b.exam_tplt = a.tplt_code;`);
    return tb_exam_tb_ptlt;
};


async function selectIdTpltZscanDatabase(){
    const [idtplt] = await zscan_database.query(`select tplt_code from tb_tplt ORDER BY tplt_code desc limit 1;`);
    return idtplt
}

module.exports = {
    selectTb_exam_tb_ptltUnificar,
    selectIdTpltZscanDatabase
}