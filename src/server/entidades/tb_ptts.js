const zscan_database  = require('../db.js')
const formataData = require('../utils/formatDate.js')

async function migrationPtts(pacientesUnificar, i, cnts_id){

    await zscan_database.query({
        query: `insert into tb_ptts (ptts_fnme, ptts_mnme, ptts_lnme, ptts_mtnm, ptts_ftnm, ptts_cnts, ptts_ocps, ptts_brdt, ptts_gndr, ptts_mrst, ptts_phto, ptts_ntly, ptts_scho, ptts_dfhp, ptts_ucrt, ptts_uchd, ptts_udlt, ptts_dhcr, ptts_dhcg, ptts_dhdl) value (
            :ptts_fnme,
            :ptts_mnme, 
            :ptts_lnme, 
            :ptts_mtnm, 
            :ptts_ftnm, 
            :ptts_cnts,
            :ptts_ocps, 
            :ptts_brdt, 
            :ptts_gndr, 
            :ptts_mrst, 
            :ptts_phto, 
            :ptts_ntly, 
            :ptts_scho, 
            :ptts_dfhp, 
            :ptts_ucrt, 
            :ptts_uchd, 
            :ptts_udlt, 
            :ptts_dhcr, 
            :ptts_dhcg, 
            :ptts_dhdl
        );`,
        values: {
            ptts_fnme: pacientesUnificar[i].ptts_fnme ? pacientesUnificar[i].ptts_fnme : 'GENERIC',
            ptts_mnme: pacientesUnificar[i].ptts_mnme ? pacientesUnificar[i].ptts_mnme : null,
            ptts_lnme: pacientesUnificar[i].ptts_lnme ? pacientesUnificar[i].ptts_lnme : 'GENERIC',
            ptts_mtnm: pacientesUnificar[i].ptts_mtnm ? pacientesUnificar[i].ptts_mtnm : 'GENERIC',
            ptts_ftnm: pacientesUnificar[i].ptts_ftnm ? pacientesUnificar[i].ptts_ftnm : null,
            ptts_cnts: cnts_id[0].cnts_code ? cnts_id[0].cnts_code : 1,
            ptts_ocps: pacientesUnificar[i].ptts_ocps ? pacientesUnificar[i].ptts_ocps : null,
            ptts_brdt: pacientesUnificar[i].ptts_brdt ? pacientesUnificar[i].ptts_brdt : null,
            ptts_gndr: pacientesUnificar[i].ptts_gndr ? pacientesUnificar[i].ptts_gndr : 3,
            ptts_mrst: pacientesUnificar[i].ptts_mrst ? pacientesUnificar[i].ptts_mrst : null,
            ptts_phto: pacientesUnificar[i].ptts_phto ? pacientesUnificar[i].ptts_phto : null,
            ptts_ntly: pacientesUnificar[i].ptts_ntly ? pacientesUnificar[i].ptts_ntly : null,
            ptts_scho: pacientesUnificar[i].ptts_scho ? pacientesUnificar[i].ptts_scho : null,
            ptts_dfhp: pacientesUnificar[i].ptts_dfhp ? pacientesUnificar[i].ptts_dfhp : null,
            ptts_ucrt: pacientesUnificar[i].ptts_ucrt ? pacientesUnificar[i].ptts_ucrt : null,
            ptts_uchd: pacientesUnificar[i].ptts_uchd ? pacientesUnificar[i].ptts_uchd : null,
            ptts_udlt: pacientesUnificar[i].ptts_udlt ? pacientesUnificar[i].ptts_udlt : null,
            ptts_dhcr: pacientesUnificar[i].ptts_dhcr ? formataData(pacientesUnificar[i].ptts_dhcr) : '2018-10-30 19:54:37',
            ptts_dhcg: pacientesUnificar[i].ptts_dhcg ? formataData(pacientesUnificar[i].ptts_dhcg) : '2018-10-30 19:54:37',
            ptts_dhdl: pacientesUnificar[i].ptts_dhdl ? formataData(pacientesUnificar[i].ptts_dhdl) : null
        }
        
    }).catch(
        (e) => {
            console.log(e)
            return
        }
    );
    
};

module.exports = migrationPtts


