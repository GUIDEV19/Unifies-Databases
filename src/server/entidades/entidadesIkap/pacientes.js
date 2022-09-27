const zscan_database  = require('../../config/db.js')
const utils = require('../../utils/ikapUtils.js')
const formatdate = require('../../utils/formatDate.js')

async function migrationPacientesIkap(result, idcnts){
    const formatName = utils.formatNome(result.nome)
    
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
            ptts_fnme: formatName.firstName ? formatName.firstName : 'Generic',
            ptts_mnme: formatName.middleName ? formatName.middleName : '',
            ptts_lnme: formatName.lastName ? formatName.lastName : 'Generic',
            ptts_mtnm: null,
            ptts_ftnm: null,
            ptts_cnts: idcnts ? idcnts : null,
            ptts_ocps: null,
            ptts_brdt: result.data_nasc ? utils.formatdate(result.data_nasc) : '1999-01-01',
            ptts_gndr: result.sexo ? utils.formatsexo(result.sexo) : 3,
            ptts_mrst: result.estado_civil ? utils.formatEstadoCivil(result.estado_civil) : 5,
            ptts_phto: null,
            ptts_ntly: null,
            ptts_scho: null,
            ptts_dfhp: null,
            ptts_ucrt: 1,
            ptts_uchd: null,
            ptts_udlt: null,
            ptts_dhcr: result.ultima_alteracao ? formatdate(result.ultima_alteracao) : formatdate(new Date()),
            ptts_dhcg: result.ultima_alteracao ? formatdate(result.ultima_alteracao) : formatdate(new Date()),
            ptts_dhdl: null
        }
        
    })
}

module.exports = migrationPacientesIkap