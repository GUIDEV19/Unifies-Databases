const zscan_database  = require('../db.js')
const formataData = require('../utils/formatDate.js')

async function migrationDocs(tb_docs){
    const format_docs_dhcr = formataData(tb_docs[0].docs_dhcr);
    const format_docs_dhcg = formataData(tb_docs[0].docs_dhcg);
        
    await zscan_database.query(`insert into tb_docs (docs_type, docs_numb, docs_extr, docs_dhcr, docs_dhcg, docs_dhdl) values (?,?,?,?,?,?);`, 
    {
        replacements: [
            tb_docs[0].docs_type ? tb_docs[0].docs_type : null,
            tb_docs[0].docs_numb ? tb_docs[0].docs_numb : null,
            tb_docs[0].docs_extr ? tb_docs[0].docs_extr : null,
            format_docs_dhcr,
            format_docs_dhcg,
            tb_docs[0].docs_dhdl ? tb_docs[0].docs_dhdl : null
        ],
        type: zscan_database.INSERT
    }).catch(
        (e) => {
            console.log(e)
            return 
        }
    );
};

module.exports = migrationDocs