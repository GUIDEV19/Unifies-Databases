const zscan_database  = require('../db.js')
const formataData = require('../handleData/formatDate.js')

async function migrationRprt(tb_rprt, idpaciente){
    for(i = 0; i < tb_rprt.length; i++){
        const [nomeExam] = await zscan_database.query(`select exam_code from tb_exam inner join tb_tplt on tplt_code = exam_tplt where exam_name = '${tb_rprt[i].exam_name}' limit 1;`)
        const rprt_dhcr = formataData(tb_rprt[i].rprt_dhcr);
        const rprt_dhcg = formataData(tb_rprt[i].rprt_dhcg)
        await zscan_database.query(`insert into tb_rprt (rprt_dctr, rprt_reqs, rprt_tech, rprt_anth, rprt_nrse, rprt_daux, rprt_ptts, rprt_dvcs, rprt_hpbk, rprt_exam, rprt_apnt, rprt_rslt, rprt_rpby, rprt_copy, rprt_pnam, rprt_ppth, rprt_psze, rprt_dtex, rprt_dtrr, rprt_drft, rprt_ucrt, rprt_uchd, rprt_udlt, rprt_clse, rprt_sync, rprt_ukey, rprt_dhcr, rprt_dhcg, rprt_dhdl) value (
            1,
            null,
            null,
            null,
            null,
            null,
            ${idpaciente[0].ptts_code},
            null,
            null,
            ${nomeExam[0].exam_code},
            null,
            null,
            null,
            ${tb_rprt[i].rprt_copy},
            '${tb_rprt[i].rprt_pnam}',
            '${tb_rprt[i].rprt_ppth}',
            ${tb_rprt[i].rprt_psze},
            null,
            null,
            ${tb_rprt[i].rprt_drft},
            null,
            null,
            null,
            null,
            null,
            '${tb_rprt[i].rprt_ukey}',
            '${rprt_dhcr}',
            '${rprt_dhcg}',
            null
        );`)
    }
};

module.exports = migrationRprt;

