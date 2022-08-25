const zscan_database  = require('../db.js')
const formataData = require('../utils/formatDate.js')

async function migrationCnts(pacientesUnificar, i){
    console.log(i)
    let formt_dhcr = await formataData(pacientesUnificar[i].cnts_dhcr);
    let formt_dhcg = await formataData(pacientesUnificar[i].cnts_dhcg);

    await zscan_database.query(`insert into tb_cnts (cnts_phn1, cnts_phn2, cnts_cel1, cnts_cel2, cnts_eml1, cnts_eml2, cnts_site, cnts_adpp, cnts_adst, cnts_adnr, cnts_adnh, cnts_adzc, cnts_city, cnts_dhcr, cnts_dhcg, cnts_dhdl ) value (
        '${pacientesUnificar[i].cnts_phn1}',
        '${pacientesUnificar[i].cnts_phn2}',
        '${pacientesUnificar[i].cnts_cel1}',
        '${pacientesUnificar[i].cnts_cel2}',
        '${pacientesUnificar[i].cnts_eml1}',
        '${pacientesUnificar[i].cnts_eml2}',
        '${pacientesUnificar[i].cnts_site}',
        '${pacientesUnificar[i].cnts_adpp}',
        '${pacientesUnificar[i].cnts_adst}',
        '${pacientesUnificar[i].cnts_adnr}',
        '${pacientesUnificar[i].cnts_adnh}',
        '${pacientesUnificar[i].cnts_adzc}',
        ${pacientesUnificar[i].cnts_city},
        '${formt_dhcr}',
        '${formt_dhcg}',
        null
    )`)
};

module.exports = migrationCnts