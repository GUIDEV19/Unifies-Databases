const zscan_database  = require('../config/db.js')
const unificar = require('../config/dbUnificar.js')

async function selecetTb_examUnificar(){
    const [tb_exam] = await unificar.query(`select * from tb_exam;`);
    return tb_exam
}

async function selectIdExamZscanDatabase(){
    const [idExam] = await zscan_database.query(`select exam_code from tb_exam ORDER BY exam_code desc limit 1;`);
    return idExam
}

module.exports = {
    selecetTb_examUnificar,
    selectIdExamZscanDatabase
}