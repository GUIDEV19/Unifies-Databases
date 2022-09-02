const zscan_database  = require('../db.js')
const formataData = require('../utils/formatDate.js')

async function migrationDocs(tb_docs){

    await zscan_database.query({
        query: `insert into tb_docs (docs_type, docs_numb, docs_extr, docs_dhcr, docs_dhcg, docs_dhdl) values (?,?,?,?,?,?);`,
        values: [
            tb_docs[0].docs_type ? tb_docs[0].docs_type : null,
            tb_docs[0].docs_numb ? tb_docs[0].docs_numb : null,
            tb_docs[0].docs_extr ? tb_docs[0].docs_extr : null,
            tb_docs[0].docs_dhcr ? formataData(tb_docs[0].docs_dhcr) : '2018-10-30 19:54:37',
            tb_docs[0].docs_dhcg ? formataData(tb_docs[0].docs_dhcg) : '2018-10-30 19:54:37',
            tb_docs[0].docs_dhdl ? formataData(tb_docs[0].docs_dhdl) : null
        ]
    }).catch(
        (e) => {
            console.log(e)
            return 
        }
    );
};

module.exports = migrationDocs