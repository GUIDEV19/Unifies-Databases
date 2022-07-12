const zscan_database  = require('../db.js')
const formataData = require('../handleData/formatDate.js')

async function migrationExam(idtplt, tb_exam_tb_ptlt, i, tb_exam){
    if(i < tb_exam.length){

        let format_exam_dhcr =  formataData(tb_exam_tb_ptlt[i].exam_dhcr)
        let format_exam_dhcg = formataData(tb_exam_tb_ptlt[i].exam_dhcg)
        await zscan_database.query(`insert into tb_exam (exam_name, exam_titl, exam_tplt, exam_lang, exam_actv, exam_ucrt, exam_uchd, exam_udlt, exam_dhcr, exam_dhcg, exam_dhdl) values (
            '${tb_exam_tb_ptlt[i].exam_name}',
            '${tb_exam_tb_ptlt[i].exam_titl}',
            ${idtplt[0].tplt_code},
            '${tb_exam_tb_ptlt[i].exam_lang}',
            0,
            ${tb_exam_tb_ptlt[i].exam_ucrt},
            ${tb_exam_tb_ptlt[i].exam_uchd},
            ${tb_exam_tb_ptlt[i].exam_udlt},
            '${format_exam_dhcr}',
            '${format_exam_dhcg}',
            null
        );`)
    } 
};

module.exports = migrationExam