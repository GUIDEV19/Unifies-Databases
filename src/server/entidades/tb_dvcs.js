const zscan_database  = require('../config/db.js')
const formataData = require('../utils/formatDate.js')

async function migrationDvcs(tb_dvcs){
    for(var i = 0; i < tb_dvcs.length; i++){
        await zscan_database.query({
            query: `insert into tb_dvcs (dvcs_mdel, dvcs_srnb, dvcs_desc, dvcs_ucrt, dvcs_uchd, dvcs_udlt, dvcs_dhcr, dvcs_dhcg, dvcs_dhdl) values (?,?,?,?,?,?,?,?,?);`,
            values: [
                tb_dvcs[i].dvcs_mdel ? tb_dvcs[i].dvcs_mdel : '811',
                tb_dvcs[i].dvcs_srnb ? tb_dvcs[i].dvcs_srnb : '00000000',
                tb_dvcs[i].dvcs_desc ? tb_dvcs[i].dvcs_desc : null,
                tb_dvcs[i].dvcs_ucrt ? tb_dvcs[i].dvcs_ucrt : 6,
                tb_dvcs[i].dvcs_uchd ? tb_dvcs[i].dvcs_uchd : 6,
                tb_dvcs[i].dvcs_udlt ? tb_dvcs[i].dvcs_udlt : null,
                tb_dvcs[i].dvcs_dhcr ? formataData(tb_dvcs[i].dvcs_dhcr) : '2018-12-12 11:22:49',
                tb_dvcs[i].dvcs_dhcg ? formataData(tb_dvcs[i].dvcs_dhcg) : '2018-12-12 11:22:49',
                tb_dvcs[i].dvcs_dhld ? tb_dvcs[i].dvcs_dhld : null
            ]
        }).catch(
            (e) => {
                console.log(e)
                return 
            }
        );
        
    }
    console.log('migração da Tabela dvcs terminada.')

}

module.exports = migrationDvcs