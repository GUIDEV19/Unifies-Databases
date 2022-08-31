const zscan_database  = require('../db.js')
const formataData = require('../utils/formatDate.js')

async function migrationRprt(tb_rprt, idpaciente){
    for(i = 0; i < tb_rprt.length; i++){
        const [nomeExam] = await zscan_database.query({
            query: `select exam_code from tb_exam inner join tb_tplt on tplt_code = exam_tplt where exam_name = ? limit 1;`,
            values: [tb_rprt[i].exam_name]
        });
        await zscan_database.query({
            query: `insert into tb_rprt (rprt_dctr, rprt_reqs, rprt_tech, rprt_anth, rprt_nrse, rprt_daux, rprt_ptts, rprt_dvcs, rprt_hpbk, rprt_exam, rprt_apnt, rprt_rslt, rprt_rpby, rprt_copy, rprt_pnam, rprt_ppth, rprt_psze, rprt_dtex, rprt_dtrr, rprt_drft, rprt_ucrt, rprt_uchd, rprt_udlt, rprt_clse, rprt_sync, rprt_ukey, rprt_dhcr, rprt_dhcg, rprt_dhdl) value (
                :rprt_dctr,
                :rprt_reqs, 
                :rprt_tech, 
                :rprt_anth, 
                :rprt_nrse, 
                :rprt_daux, 
                :rprt_ptts, 
                :rprt_dvcs, 
                :rprt_hpbk, 
                :rprt_exam, 
                :rprt_apnt, 
                :rprt_rslt, 
                :rprt_rpby, 
                :rprt_copy, 
                :rprt_pnam, 
                :rprt_ppth, 
                :rprt_psze, 
                :rprt_dtex, 
                :rprt_dtrr, 
                :rprt_drft, 
                :rprt_ucrt, 
                :rprt_uchd, 
                :rprt_udlt, 
                :rprt_clse, 
                :rprt_sync, 
                :rprt_ukey, 
                :rprt_dhcr, 
                :rprt_dhcg, 
                :rprt_dhdl
            );`,
            values: {
                rprt_dctr: tb_rprt[i].rprt_dctr ? tb_rprt[i].rprt_dctr : 1,
                rprt_reqs: tb_rprt[i].rprt_reqs ? tb_rprt[i].rprt_reqs : null,
                rprt_tech: tb_rprt[i].rprt_tech ? tb_rprt[i].rprt_tech : null,
                rprt_anth: tb_rprt[i].rprt_anth ? tb_rprt[i].rprt_anth : null,
                rprt_nrse: tb_rprt[i].rprt_nrse ? tb_rprt[i].rprt_nrse : null,
                rprt_daux: tb_rprt[i].rprt_daux ? tb_rprt[i].rprt_daux : null,
                rprt_ptts: idpaciente[0].ptts_code,
                rprt_dvcs: tb_rprt[i].rprt_dvcs ? tb_rprt[i].rprt_dvcs : null,
                rprt_hpbk: tb_rprt[i].rprt_hpbk ? tb_rprt[i].rprt_hpbk : null,
                rprt_exam: nomeExam[0].exam_code,
                rprt_apnt: tb_rprt[i].rprt_apnt ? tb_rprt[i].rprt_apnt : null,
                rprt_rslt: tb_rprt[i].rprt_rslt ? tb_rprt[i].rprt_rslt : null,
                rprt_rpby: tb_rprt[i].rprt_rpby ? tb_rprt[i].rprt_rpby : 0,
                rprt_copy: tb_rprt[i].rprt_copy ? tb_rprt[i].rprt_copy : 0,
                rprt_pnam: tb_rprt[i].rprt_pnam,
                rprt_ppth: tb_rprt[i].rprt_ppth,
                rprt_psze: tb_rprt[i].rprt_psze,
                rprt_dtex: tb_rprt[i].rprt_dtex ? tb_rprt[i].rprt_dtex : null,
                rprt_dtrr: tb_rprt[i].rprt_dtrr ? tb_rprt[i].rprt_dtrr : null,
                rprt_drft: tb_rprt[i].rprt_drft ? tb_rprt[i].rprt_drft : 0,
                rprt_ucrt: tb_rprt[i].rprt_ucrt ? tb_rprt[i].rprt_ucrt : null,
                rprt_uchd: tb_rprt[i].rprt_uchd ? tb_rprt[i].rprt_uchd : null,
                rprt_udlt: tb_rprt[i].rprt_udlt ? tb_rprt[i].rprt_udlt : null,
                rprt_clse: tb_rprt[i].rprt_clse ? tb_rprt[i].rprt_clse : null,
                rprt_sync: tb_rprt[i].rprt_sync ? tb_rprt[i].rprt_sync : null,
                rprt_ukey: tb_rprt[i].rprt_ukey,
                rprt_dhcr: tb_rprt[i].rprt_dhcr ? formataData(tb_rprt[i].rprt_dhcr) : '2018-10-30 19:54:37',
                rprt_dhcg: tb_rprt[i].rprt_dhcg ? formataData(tb_rprt[i].rprt_dhcg) : '2018-10-30 19:54:37',
                rprt_dhdl: tb_rprt[i].rprt_dhdl ? formataData(tb_rprt[i].rprt_dhdl) : null
            }
        }).catch(
            (e) => {
                console.log(e)
                return 
            }
        );
    };
};

module.exports = migrationRprt;