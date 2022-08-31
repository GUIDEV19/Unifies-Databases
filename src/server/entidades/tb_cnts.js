const zscan_database  = require('../db.js')
const formataData = require('../utils/formatDate.js')

async function migrationCnts(pacientesUnificar, i){

    await zscan_database.query(`insert into tb_cnts (cnts_phn1, cnts_phn2, cnts_cel1, cnts_cel2, cnts_eml1, cnts_eml2, cnts_site, cnts_adpp, cnts_adst, cnts_adnr, cnts_adnh, cnts_adzc, cnts_city, cnts_dhcr, cnts_dhcg, cnts_dhdl ) value (
        :cnts_phn1,
        :cnts_phn2, 
        :cnts_cel1, 
        :cnts_cel2, 
        :cnts_eml1, 
        :cnts_eml2, 
        :cnts_site, 
        :cnts_adpp, 
        :cnts_adst, 
        :cnts_adnr, 
        :cnts_adnh, 
        :cnts_adzc, 
        :cnts_city, 
        :cnts_dhcr, 
        :cnts_dhcg, 
        :cnts_dhdl
        )`,{
        replacements:{
            cnts_phn1: pacientesUnificar[i].cnts_phn1 ? pacientesUnificar[i].cnts_phn1 : null,
            cnts_phn2: pacientesUnificar[i].cnts_phn2 ? pacientesUnificar[i].cnts_phn2 : null,
            cnts_cel1: pacientesUnificar[i].cnts_cel1 ? pacientesUnificar[i].cnts_cel1 : null,
            cnts_cel2: pacientesUnificar[i].cnts_cel2 ? pacientesUnificar[i].cnts_cel2 : null,
            cnts_eml1: pacientesUnificar[i].cnts_eml1 ? pacientesUnificar[i].cnts_eml1 : null,
            cnts_eml2: pacientesUnificar[i].cnts_eml2 ? pacientesUnificar[i].cnts_eml2 : null,
            cnts_site: pacientesUnificar[i].cnts_site ? pacientesUnificar[i].cnts_site : null,
            cnts_adpp: pacientesUnificar[i].cnts_adpp ? pacientesUnificar[i].cnts_adpp : null,
            cnts_adst: pacientesUnificar[i].cnts_adst ? pacientesUnificar[i].cnts_adst : null,
            cnts_adnr: pacientesUnificar[i].cnts_adnr ? pacientesUnificar[i].cnts_adnr : null,
            cnts_adnh: pacientesUnificar[i].cnts_adnh ? pacientesUnificar[i].cnts_adnh : null,
            cnts_adzc: pacientesUnificar[i].cnts_adzc ? pacientesUnificar[i].cnts_adzc : null,
            cnts_city: pacientesUnificar[i].cnts_city ? pacientesUnificar[i].cnts_city : 3568,
            cnts_dhcr: pacientesUnificar[i].cnts_dhcr ? formataData(pacientesUnificar[i].cnts_dhcr) : '2018-10-30 19:54:37',
            cnts_dhcg: pacientesUnificar[i].cnts_dhcg ? formataData(pacientesUnificar[i].cnts_dhcg) : '2018-10-30 19:54:37',
            cnts_dhdl: pacientesUnificar[i].cnts_dhdl ? formataData(pacientesUnificar[i].cnts_dhdl) : null
        },
        type: zscan_database.INSERT
    }).catch(
        (e) => {
            console.log(e)
            return 
        }
    )
};

module.exports = migrationCnts