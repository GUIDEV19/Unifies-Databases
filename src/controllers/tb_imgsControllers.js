const zscan_database  = require('../db.js')
const formataData = require('../handleData/formatDate.js')

async function migrationImgs(tb_imgs, idpaciente){
    for(i = 0; i < tb_imgs.length; i++){
        const [nomeExam] = await zscan_database.query(`select exam_code from tb_exam where exam_name = '${tb_imgs[i].exam_name}' limit 1;`);
        const imgs_dhcr = formataData(tb_imgs[i].imgs_dhcr);
        const imgs_dhcg = formataData(tb_imgs[i].imgs_dhcg);
        await zscan_database.query(`insert into tb_imgs (imgs_name,imgs_exts,imgs_path,imgs_size,imgs_dims,imgs_dvcs,imgs_with,imgs_hegt,imgs_resx,imgs_resy,imgs_itst,imgs_mnft,imgs_modl,imgs_srnb,imgs_ptts,imgs_exam,imgs_emps,imgs_apnt,imgs_lgda,imgs_satn,imgs_shps,imgs_ctrs,imgs_brgs,imgs_zoom,imgs_whbl,imgs_impt,imgs_ucrt,imgs_uchd,imgs_udlt,imgs_dhcr,imgs_dhcg,imgs_dhdl) value (
            '${tb_imgs[i].imgs_name}',
            '${tb_imgs[i].imgs_exts}',
            '${tb_imgs[i].imgs_path}',
            ${tb_imgs[i].imgs_size},
            '${tb_imgs[i].imgs_dims}',
            null,
            ${tb_imgs[i].imgs_with},
            ${tb_imgs[i].imgs_hegt},
            null,
            null,
            null,
            null,
            null,
            null,
            ${idpaciente[0].ptts_code},
            ${nomeExam[0].exam_code},
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            ${tb_imgs[i].imgs_impt},
            ${tb_imgs[i].imgs_ucrt},
            ${tb_imgs[i].imgs_uchd},
            ${tb_imgs[i].imgs_udlt},
            '${imgs_dhcr}',
            '${imgs_dhcg}',
            null
        );`)
    }
}

module.exports = migrationImgs;


