const zscan_database  = require('../db.js')
const formataData = require('../utils/formatDate.js')

async function migrationImgs(tb_imgs, idpaciente){
    for(i = 0; i < tb_imgs.length; i++){
        const [nomeExam] = await zscan_database.query(`select exam_code from tb_exam where exam_name = '${tb_imgs[i].exam_name}' limit 1;`);

        await zscan_database.query(`insert into tb_imgs (imgs_name,imgs_exts,imgs_path,imgs_size,imgs_dims,imgs_dvcs,imgs_with,imgs_hegt,imgs_resx,imgs_resy,imgs_itst,imgs_mnft,imgs_modl,imgs_srnb,imgs_ptts,imgs_exam,imgs_emps,imgs_apnt,imgs_lgda,imgs_satn,imgs_shps,imgs_ctrs,imgs_brgs,imgs_zoom,imgs_whbl,imgs_impt,imgs_ucrt,imgs_uchd,imgs_udlt,imgs_dhcr,imgs_dhcg,imgs_dhdl) value (
            :imgs_name,
            :imgs_exts,
            :imgs_path,
            :imgs_size,
            :imgs_dims,
            :imgs_dvcs,
            :imgs_with,
            :imgs_hegt,
            :imgs_resx,
            :imgs_resy,
            :imgs_itst,
            :imgs_mnft,
            :imgs_modl,
            :imgs_srnb,
            :imgs_ptts,
            :imgs_exam,
            :imgs_emps,
            :imgs_apnt,
            :imgs_lgda,
            :imgs_satn,
            :imgs_shps,
            :imgs_ctrs,
            :imgs_brgs,
            :imgs_zoom,
            :imgs_whbl,
            :imgs_impt,
            :imgs_ucrt,
            :imgs_uchd,
            :imgs_udlt,
            :imgs_dhcr,
            :imgs_dhcg,
            :imgs_dhdl
        );`,{
            replacements:{
                imgs_name: tb_imgs[i].imgs_name,
                imgs_exts: tb_imgs[i].imgs_exts,
                imgs_path: tb_imgs[i].imgs_path,
                imgs_size: tb_imgs[i].imgs_size,
                imgs_dims: tb_imgs[i].imgs_dims ? tb_imgs[i].imgs_dims : '640x480',
                imgs_dvcs: tb_imgs[i].imgs_dvcs ? tb_imgs[i].imgs_dvcs : null,
                imgs_with: tb_imgs[i].imgs_with ? tb_imgs[i].imgs_with : '640',
                imgs_hegt: tb_imgs[i].imgs_hegt ? tb_imgs[i].imgs_hegt : '480',
                imgs_resx: tb_imgs[i].imgs_resx ? tb_imgs[i].imgs_resx : null,
                imgs_resy: tb_imgs[i].imgs_resy ? tb_imgs[i].imgs_resy : null,
                imgs_itst: tb_imgs[i].imgs_itst ? tb_imgs[i].imgs_itst : null,
                imgs_mnft: tb_imgs[i].imgs_mnft ? tb_imgs[i].imgs_mnft : null,
                imgs_modl: tb_imgs[i].imgs_modl ? tb_imgs[i].imgs_modl : null,
                imgs_srnb: tb_imgs[i].imgs_srnb ? tb_imgs[i].imgs_srnb : null,
                imgs_ptts: idpaciente[0].ptts_code,
                imgs_exam: nomeExam[0].exam_code,
                imgs_emps: tb_imgs[i].imgs_emps ? tb_imgs[i].imgs_emps : null,
                imgs_apnt: tb_imgs[i].imgs_apnt ? tb_imgs[i].imgs_apnt : null,
                imgs_lgda: tb_imgs[i].imgs_lgda ? tb_imgs[i].imgs_lgda : null,
                imgs_satn: tb_imgs[i].imgs_satn ? tb_imgs[i].imgs_satn : null,
                imgs_shps: tb_imgs[i].imgs_shps ? tb_imgs[i].imgs_shps : null,
                imgs_ctrs: tb_imgs[i].imgs_ctrs ? tb_imgs[i].imgs_ctrs : null,
                imgs_brgs: tb_imgs[i].imgs_brgs ? tb_imgs[i].imgs_brgs : null,
                imgs_zoom: tb_imgs[i].imgs_zoom ? tb_imgs[i].imgs_zoom : null,
                imgs_whbl: tb_imgs[i].imgs_whbl ? tb_imgs[i].imgs_whbl : null,
                imgs_impt: tb_imgs[i].imgs_impt,
                imgs_ucrt: tb_imgs[i].imgs_ucrt ? tb_imgs[i].imgs_ucrt : null,
                imgs_uchd: tb_imgs[i].imgs_uchd ? tb_imgs[i].imgs_uchd : null,
                imgs_udlt: tb_imgs[i].imgs_udlt ? tb_imgs[i].imgs_udlt : null,
                imgs_dhcr: tb_imgs[i].imgs_dhcr ? formataData(tb_imgs[i].imgs_dhcr) : '2018-10-30 19:54:37',
                imgs_dhcg: tb_imgs[i].imgs_dhcg ? formataData(tb_imgs[i].imgs_dhcg) : '2018-10-30 19:54:37',
                imgs_dhdl: tb_imgs[i].imgs_dhdl ? formataData(tb_imgs[i].imgs_dhdl) : null
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

module.exports = migrationImgs;