const zscan_database  = require('../../config/db.js')
const formataData = require('../../utils/formatDate.js')
const utils = require('../../utils/ikapUtils.js')

async function migrationExameIkap(exames, idModelo){

    if(i <= tb_exam.length){
        await zscan_database.query({
            query: `insert into tb_exam (exam_name, exam_titl, exam_tplt, exam_lang, exam_actv, exam_ucrt, exam_uchd, exam_udlt, exam_dhcr, exam_dhcg, exam_dhdl) values (
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
            );`,
            values: {
                exam_name: exames.nome ? exames.nome + 'Ikap' : 'Exame Migrado Ikap',
                exam_titl: exames.nome ? exames.nome : 'Laudo de ',
                exam_tplt: 1,
                exam_lang: 'PT-BR',
                exam_actv: 0,
                exam_ucrt: 1,
                exam_uchd: null,
                exam_udlt: null,
                exam_dhcr: exames.ultima_alteracao ? formataData(exames.ultima_alteracao) : formataData(new Date()),
                exam_dhcg: exames.ultima_alteracao ? formataData(exames.ultima_alteracao) : formataData(new Date()),
                exam_dhdl: null
            }
        })
    }; 
};

module.exports = migrationExam
