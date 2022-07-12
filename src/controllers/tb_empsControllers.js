const zscan_database  = require('../db.js')
const formataData = require('../handleData/formatDate.js')
const migrationCnts = require('./tb_cntsControllers')

async function migrationEmps(tb_emps){
    console.log('entrei na função')
    for(i = 0; i < tb_emps.length; i++){
        console.log('entrei no loop')
        await migrationCnts(tb_emps, i);
        const [idCnts] = await zscan_database.query(`select cnts_code from tb_cnts ORDER BY cnts_code desc limit 1;`);
       /*  const emps_ills = formataData(tb_emps[i].emps_ills)    */
        const emps_dhcr = formataData(tb_emps[i].emps_dhcr)
        const emps_dhcg = formataData(tb_emps[i].emps_dhcg)
        await zscan_database.query(`insert into tb_emps (emps_fnme, emps_mnme, emps_lnme, emps_brdt, emps_gndr, emps_mrst, emps_phto, emps_sign, emps_tsgn, emps_ocps, emps_cnts, emps_ilps, emps_ilsc, emps_ills, emps_sprc, emps_ucrt, emps_uchd, emps_udlt, emps_dhcr, emps_dhcg, emps_dhdl) value (
            '${tb_emps[i].emps_fnme}',
            '${tb_emps[i].emps_mnme}',
            '${tb_emps[i].emps_lnme}',
            '${tb_emps[i].emps_brdt}',
            ${tb_emps[i].emps_gndr},
            ${tb_emps[i].emps_mrst},
            '${tb_emps[i].emps_phto}',
            '${tb_emps[i].emps_sign}',
            '${tb_emps[i].emps_tsgn}',
            ${tb_emps[i].emps_ocps},
            ${idCnts[0].cnts_code},
            '${tb_emps[i].emps_ilps}',
            ${tb_emps[i].emps_ilsc},
            ${tb_emps[i].emps_ills},
            ${tb_emps[i].emps_sprc},
            ${tb_emps[i].emps_ucrt},
            ${tb_emps[i].emps_uchd},
            ${tb_emps[i].emps_udlt},
            '${emps_dhcr}',
            '${emps_dhcg}',
            null
        );`);
        
    }
}

module.exports = migrationEmps



