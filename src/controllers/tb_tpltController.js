const zscan_database  = require('../db.js')
const formataData = require('../handleData/formatDate.js')

async function migrationTb_tplt(tb_exam_tb_ptlt, i){
    if(i < tb_exam_tb_ptlt.length){
        let format_tplt_dhcr = formataData(tb_exam_tb_ptlt[i].tplt_dhcr)
        let format_tplt_dhcg = formataData(tb_exam_tb_ptlt[i].tplt_dhcg)
        await zscan_database.query(`insert into tb_tplt (tplt_name,tplt_ftst,tplt_ftsz,tplt_ffst,tplt_ffsz,tplt_algn,tplt_ortn,tplt_size,tplt_mtop,tplt_mrgt,tplt_mbtm,tplt_mlft,tplt_stit,tplt_spid,tplt_sptt,tplt_spdc,tplt_spbd,tplt_spag,tplt_sptg,tplt_spta,tplt_srpi,tplt_sdoc,tplt_shlp,tplt_srqt,tplt_sasn,tplt_tchn,tplt_anth,tplt_seqp,tplt_sdat,tplt_sdex,tplt_sdrr,tplt_sels,tplt_sdgn,tplt_shde,tplt_shpf,tplt_shri,tplt_rinm,tplt_ssgn,tplt_scsg,tplt_sstx,tplt_slbi,tplt_hsec,tplt_fsec,tplt_limg,tplt_linf,tplt_amnt,tplt_lang,tplt_ucrt,tplt_uchd,tplt_udlt,tplt_dhcr,tplt_dhcg,tplt_dhdl) values (
            '${tb_exam_tb_ptlt[i].tplt_name}',
            '${tb_exam_tb_ptlt[i].tplt_ftst}',
            ${tb_exam_tb_ptlt[i].tplt_ftsz},
            '${tb_exam_tb_ptlt[i].tplt_ffst}',
            ${tb_exam_tb_ptlt[i].tplt_ffsz},
            '${tb_exam_tb_ptlt[i].tplt_algn}',
            '${tb_exam_tb_ptlt[i].tplt_ortn}',
            '${tb_exam_tb_ptlt[i].tplt_size}',
            ${tb_exam_tb_ptlt[i].tplt_mtop},
            ${tb_exam_tb_ptlt[i].tplt_mrgt},
            ${tb_exam_tb_ptlt[i].tplt_mbtm},
            ${tb_exam_tb_ptlt[i].tplt_mlft},
            ${tb_exam_tb_ptlt[i].tplt_stit},
            ${tb_exam_tb_ptlt[i].tplt_spid},
            ${tb_exam_tb_ptlt[i].tplt_sptt},
            ${tb_exam_tb_ptlt[i].tplt_spdc},
            ${tb_exam_tb_ptlt[i].tplt_spbd},
            ${tb_exam_tb_ptlt[i].tplt_spag},
            ${tb_exam_tb_ptlt[i].tplt_sptg},
            ${tb_exam_tb_ptlt[i].tplt_spta},
            ${tb_exam_tb_ptlt[i].tplt_srpi},
            ${tb_exam_tb_ptlt[i].tplt_sdoc},
            ${tb_exam_tb_ptlt[i].tplt_shlp},
            ${tb_exam_tb_ptlt[i].tplt_srqt},
            ${tb_exam_tb_ptlt[i].tplt_sasn},
            ${tb_exam_tb_ptlt[i].tplt_tchn},
            ${tb_exam_tb_ptlt[i].tplt_anth},
            ${tb_exam_tb_ptlt[i].tplt_seqp},
            ${tb_exam_tb_ptlt[i].tplt_sdat},
            ${tb_exam_tb_ptlt[i].tplt_sdex},
            ${tb_exam_tb_ptlt[i].tplt_sdrr},
            ${tb_exam_tb_ptlt[i].tplt_sels},
            ${tb_exam_tb_ptlt[i].tplt_sdgn},
            ${tb_exam_tb_ptlt[i].tplt_shde},
            ${tb_exam_tb_ptlt[i].tplt_shpf},
            ${tb_exam_tb_ptlt[i].tplt_shri},
            '${tb_exam_tb_ptlt[i].tplt_rinm}',
            ${tb_exam_tb_ptlt[i].tplt_ssgn},
            ${tb_exam_tb_ptlt[i].tplt_scsg},
            ${tb_exam_tb_ptlt[i].tplt_scsg},
            ${tb_exam_tb_ptlt[i].tplt_sstx},
            1,
            2,
            3,
            ${tb_exam_tb_ptlt[i].tplt_limg},
            ${tb_exam_tb_ptlt[i].tplt_amnt},
            '${tb_exam_tb_ptlt[i].tplt_lang}',
            ${tb_exam_tb_ptlt[i].tplt_ucrt},
            ${tb_exam_tb_ptlt[i].tplt_uchd},
            ${tb_exam_tb_ptlt[i].tplt_udlt},
            '${format_tplt_dhcr}',
            '${format_tplt_dhcg}',
            null
        );`) 
    }
};

module.exports = migrationTb_tplt