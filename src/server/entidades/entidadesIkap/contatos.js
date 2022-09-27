const zscan_database  = require('../../config/db.js')
const utils = require('../../utils/ikapUtils.js')
const formatdate = require('../../utils/formatDate.js')



async function migrationContatosIkap(result, idCits){
    const fones = utils.formatFone(result.fones)
    await zscan_database.query({
        query: `insert into tb_cnts (cnts_phn1, cnts_phn2, cnts_cel1, cnts_cel2, cnts_eml1, cnts_eml2, cnts_site, cnts_adpp, cnts_adst, cnts_adnr, cnts_adnh, cnts_adzc, cnts_city, cnts_dhcr, cnts_dhcg, cnts_dhdl ) value (
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
            )`,
        values: {
            cnts_phn1: fones[0] ? fones[0] : null,
            cnts_phn2: null,
            cnts_cel1: fones[1] ? fones[1] : null,
            cnts_cel2: null,
            cnts_eml1: result.email ? result.email : 'defalt@zscansoftware.com',
            cnts_eml2: null,
            cnts_site: null,
            cnts_adpp: null,
            cnts_adst: result.endereco ? result.endereco : null,
            cnts_adnr: null,
            cnts_adnh: result.bairro ? result.bairro : null,
            cnts_adzc: result.cep ? utils.formatCEP(result.cep) : null,
            cnts_city: result.cidade ? idCits : 3568,
            cnts_dhcr: result.ultima_alteracao ? formatdate(result.ultima_alteracao) : formatdate(new Date()),
            cnts_dhcg: result.ultima_alteracao ? formatdate(result.ultima_alteracao) : formatdate(new Date()),
            cnts_dhdl: null
        }
    });
        
}

module.exports = migrationContatosIkap