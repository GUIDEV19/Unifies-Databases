const zscan_database  = require('../db.js')




async function migrationptts_has_docs(idpaciente, idDocs){
    await zscan_database.query(`insert into ptts_has_docs (ptts_code, docs_code) values (
        ${idpaciente[0].ptts_code},
        ${idDocs[0].docs_code}
    );`);
};

module.exports = migrationptts_has_docs




