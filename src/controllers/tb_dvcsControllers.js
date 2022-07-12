const zscan_database  = require('../db.js')
const formataData = require('../handleData/formatDate.js')

async function migrationDvcs(tb_dvcs){
    for(var i = 0; i < tb_dvcs.length; i++){
        const dvcs_dhcr = formataData(tb_dvcs[i].dvcs_dhcr)
        const dvcs_dhcg =  formataData(tb_dvcs[i].dvcs_dhcg)
        await zscan_database.query(`insert into tb_dvcs (dvcs_mdel, dvcs_srnb, dvcs_desc, dvcs_ucrt, dvcs_uchd, dvcs_udlt, dvcs_dhcr, dvcs_dhcg, dvcs_dhdl) values (
            ${tb_dvcs[i].dvcs_mdel},
            '${tb_dvcs[i].dvcs_srnb}',
            '${tb_dvcs[i].dvcs_desc}',
            ${tb_dvcs[i].dvcs_ucrt},
            ${tb_dvcs[i].dvcs_uchd},
            ${tb_dvcs[i].dvcs_udlt},
            '${dvcs_dhcr}',
            '${dvcs_dhcg}',
            null
        );`)
        
        
    }
    console.log('migração da Tabela dvcs terminada.')

}

module.exports = migrationDvcs