const zscan_database  = require('../../config/db.js')

async function selectCytsId(city){
    const [id_city] = await zscan_database.query({
        query: `select cits_code from tb_cits where cits_name = ?;`,
        values: [
            city
        ]
    });
    return id_city
}



module.exports = {
    selectCytsId
}