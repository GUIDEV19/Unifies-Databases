const zscan_database  = require('../db.js')
const formataData = require('../utils/formatDate.js')

async function migrationPtts(pacientesUnificar, i, cnts_id){
    const format_ptts_dhcr = formataData(pacientesUnificar[i].ptts_dhcr);
    const format_ptts_dhcg = formataData(pacientesUnificar[i].ptts_dhcg);

    await zscan_database.query(`insert into tb_ptts (ptts_fnme, ptts_mnme, ptts_lnme, ptts_mtnm, ptts_ftnm, ptts_cnts, ptts_ocps, ptts_brdt, ptts_gndr, ptts_mrst, ptts_phto, ptts_ntly, ptts_scho, ptts_dfhp, ptts_ucrt, ptts_uchd, ptts_udlt, ptts_dhcr, ptts_dhcg, ptts_dhdl) value (
        '${pacientesUnificar[i].ptts_fnme}',
        '${pacientesUnificar[i].ptts_mnme}',
        '${pacientesUnificar[i].ptts_lnme}',
        'Generic',
        null,
        ${cnts_id[0].cnts_code},
        ${pacientesUnificar[i].ptts_ocps},
        '${pacientesUnificar[i].ptts_brdt}',
        ${pacientesUnificar[i].ptts_gndr},
        ${pacientesUnificar[i].ptts_mrst},
        '${pacientesUnificar[i].ptts_phto}',
        '${pacientesUnificar[i].ptts_ntly}',
        ${pacientesUnificar[i].ptts_scho},
        ${pacientesUnificar[i].ptts_dfhp},
        ${pacientesUnificar[i].ptts_ucrt},
        ${pacientesUnificar[i].ptts_uchd},
        ${pacientesUnificar[i].ptts_udlt},
        '${format_ptts_dhcr}',
        '${format_ptts_dhcg}',
        null
    );`)

    console.log(format_ptts_dhcr)
};

module.exports = migrationPtts


