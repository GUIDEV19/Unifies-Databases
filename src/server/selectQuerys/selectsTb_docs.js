const zscan_database  = require('../db.js')
const unificar = require('../dbUnificar.js')

async function  selectPtts_has_docsUnificar(pacientesUnificar){
    const [tb_docs] = await unificar.query({
        query: `select * from ptts_has_docs as a inner join tb_docs as b on a.docs_code = b.docs_code where a.ptts_code = ?;`,
        values: [pacientesUnificar]
    });
    return tb_docs
};

async function selectIdDocsZscanDatabase(){
    const [idDocs] = await zscan_database.query(`select docs_code from tb_docs ORDER BY docs_code desc limit 1;`); 
    return idDocs
}

module.exports = {
    selectPtts_has_docsUnificar,
    selectIdDocsZscanDatabase
}