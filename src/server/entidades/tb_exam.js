const zscan_database  = require('../db.js')
const formataData = require('../utils/formatDate.js')

async function migrationExam(idtplt, tb_exam_tb_ptlt, i, tb_exam){

    if(i < tb_exam.length){
        await zscan_database.query(`insert into tb_exam (exam_name, exam_titl, exam_tplt, exam_lang, exam_actv, exam_ucrt, exam_uchd, exam_udlt, exam_dhcr, exam_dhcg, exam_dhdl) values (
            :exam_name,
            :exam_titl, 
            :exam_tplt, 
            :exam_lang, 
            :exam_actv, 
            :exam_ucrt, 
            :exam_uchd, 
            :exam_udlt, 
            :exam_dhcr, 
            :exam_dhcg, 
            :exam_dhdl
        );`,{
            replacements: {
                exam_name: tb_exam_tb_ptlt[i].exam_name,
                exam_titl: tb_exam_tb_ptlt[i].exam_titl,
                exam_tplt: idtplt[0].tplt_code,
                exam_lang: tb_exam_tb_ptlt[i].exam_lang ? tb_exam_tb_ptlt[i].exam_lang : 'PT-BR',
                exam_actv: 0,
                exam_ucrt: tb_exam_tb_ptlt[i].exam_ucrt ? tb_exam_tb_ptlt[i].exam_ucrt : null,
                exam_uchd: tb_exam_tb_ptlt[i].exam_uchd ? tb_exam_tb_ptlt[i].exam_uchd : null,
                exam_udlt: tb_exam_tb_ptlt[i].exam_udlt ? tb_exam_tb_ptlt[i].exam_udlt : null,
                exam_dhcr: tb_exam_tb_ptlt[i].exam_dhcr ? formataData(tb_exam_tb_ptlt[i].exam_dhcr) : '2018-10-30 19:54:37',
                exam_dhcg: tb_exam_tb_ptlt[i].exam_dhcg ? formataData(tb_exam_tb_ptlt[i].exam_dhcg) : '2018-10-30 19:54:37',
                exam_dhdl: tb_exam_tb_ptlt[i].exam_dhdl ? formataData(tb_exam_tb_ptlt[i].exam_dhdl) : null
            },
            type: zscan_database.INSERT
        }).catch(
            (e) => {
                console.log(e)
                return
            }
        );
    }; 
};

module.exports = migrationExam

