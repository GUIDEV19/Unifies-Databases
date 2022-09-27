const zscan_database  = require('../../config/db.js')
const formataData = require('../../utils/formatDate.js')
const utils = require('../../utils/ikapUtils.js')

async function migrationDocumentos(result){

    await zscan_database.query({
        query: `insert into tb_docs (docs_type, docs_numb, docs_extr, docs_dhcr, docs_dhcg, docs_dhdl) values (?,?,?,?,?,?);`,
        values: [
            8,
            result.cpf ? utils.formatDoc(result.cpf) : '00000000000',
            null,
            result.ultima_alteracao ? formataData(result.ultima_alteracao) : formataData(new Date()),
            result.ultima_alteracao ? formataData(result.ultima_alteracao) : formataData(new Date()),
            null
        ]
    })
};

module.exports = migrationDocumentos