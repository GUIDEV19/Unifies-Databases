const unificar = require('../config/dbUnificar.js')
const zscan_database = require('../config/db.js')

async function selectRprtEndPttsUnificar(idPaciente){
    const [tb_rprt] = await unificar.query({
        query: `select * from tb_rprt as a inner join tb_ptts as b on a.rprt_ptts = b.ptts_code inner join tb_exam as c on c.exam_code = a.rprt_exam where a.rprt_ptts = ?;`,
        values: [
            idPaciente
        ]
    })
    return tb_rprt
}

async function selectIdExamEndTb_tplt(tb_rprt){
    const [nomeExam] = await zscan_database.query(`select exam_code from tb_exam inner join tb_tplt on tplt_code = exam_tplt where exam_name = '${tb_rprt}' limit 1;`);
    return nomeExam
}

module.exports = {
    selectRprtEndPttsUnificar,
    selectIdExamEndTb_tplt
}
    