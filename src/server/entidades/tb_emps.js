const zscan_database  = require('../db.js')
const formataData = require('../utils/formatDate.js')
const migrationCnts = require('./tb_cnts')

async function migrationEmps(tb_emps){

    for(i = 0; i < tb_emps.length; i++){
        await migrationCnts(tb_emps, i);
        const [idCnts] = await zscan_database.query(`select cnts_code from tb_cnts ORDER BY cnts_code desc limit 1;`);

        await zscan_database.query(`insert into tb_emps (emps_fnme, emps_mnme, emps_lnme, emps_brdt, emps_gndr, emps_mrst, emps_phto, emps_sign, emps_tsgn, emps_ocps, emps_cnts, emps_ilps, emps_ilsc, emps_ills, emps_sprc, emps_ucrt, emps_uchd, emps_udlt, emps_dhcr, emps_dhcg, emps_dhdl) value (
            :emps_fnme, 
            :emps_mnme, 
            :emps_lnme, 
            :emps_brdt, 
            :emps_gndr, 
            :emps_mrst, 
            :emps_phto, 
            :emps_sign, 
            :emps_tsgn, 
            :emps_ocps, 
            :emps_cnts, 
            :emps_ilps, 
            :emps_ilsc, 
            :emps_ills, 
            :emps_sprc, 
            :emps_ucrt, 
            :emps_uchd, 
            :emps_udlt, 
            :emps_dhcr, 
            :emps_dhcg, 
            :emps_dhdl
        );`,{
            replacements: {
                emps_fnme: tb_emps[i].emps_fnme ? tb_emps[i].emps_fnme : 'GENERIC',
                emps_mnme: tb_emps[i].emps_mnme ? tb_emps[i].emps_mnme : null,
                emps_lnme: tb_emps[i].emps_lnme ? tb_emps[i].emps_lnme : 'GENERIC',
                emps_brdt: tb_emps[i].emps_brdt ? tb_emps[i].emps_brdt : null,
                emps_gndr: tb_emps[i].emps_gndr ? tb_emps[i].emps_gndr : null,
                emps_mrst: tb_emps[i].emps_mrst ? tb_emps[i].emps_mrst : null,
                emps_phto: tb_emps[i].emps_phto ? tb_emps[i].emps_phto : null,
                emps_sign: tb_emps[i].emps_sign ? tb_emps[i].emps_sign : null,
                emps_tsgn: tb_emps[i].emps_tsgn ? tb_emps[i].emps_tsgn : null,
                emps_ocps: tb_emps[i].emps_ocps ? tb_emps[i].emps_ocps : null,
                emps_cnts: idCnts[0].cnts_code ? idCnts[0].cnts_code : null,
                emps_ilps: tb_emps[i].emps_ilps ? tb_emps[i].emps_ilps : null,
                emps_ilsc: tb_emps[i].emps_ilsc ? tb_emps[i].emps_ilsc : null,
                emps_ills: tb_emps[i].emps_ills ? tb_emps[i].emps_ills : null,
                emps_sprc: tb_emps[i].emps_sprc ? tb_emps[i].emps_sprc : 0,
                emps_ucrt: tb_emps[i].emps_ucrt ? tb_emps[i].emps_ucrt : null,
                emps_uchd: tb_emps[i].emps_uchd ? tb_emps[i].emps_uchd : null,
                emps_udlt: tb_emps[i].emps_udlt ? tb_emps[i].emps_udlt : null,
                emps_dhcr: tb_emps[i].emps_dhcr ?  formataData(tb_emps[i].emps_dhcr) : '2018-10-30 19:54:37',
                emps_dhcg: tb_emps[i].emps_dhcg ?  formataData(tb_emps[i].emps_dhcg) : '2018-10-30 19:54:37',
                emps_dhdl: tb_emps[i].emps_dhdl ?  formataData(tb_emps[i].emps_dhdl) : null
            },
            type: zscan_database.INSERT
        }).catch(
            (e) => {
                console.log(e)
                return
            }
        );
        
    }
}

module.exports = migrationEmps