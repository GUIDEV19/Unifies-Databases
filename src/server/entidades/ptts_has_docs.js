const zscan_database  = require('../config/db.js')




async function migrationptts_has_docs(idpaciente, idDocs){
    await zscan_database.query({
        query: `insert into ptts_has_docs (ptts_code, docs_code) values (?, ?)`,
        values: [
            idpaciente[0].ptts_code,
            idDocs[0].docs_code
        ]
    }).catch(
        (e) => {
            console.log(e)
            return 
        }
    )
};

module.exports = migrationptts_has_docs




