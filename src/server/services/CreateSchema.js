const zscan_database  = require('../db.js')

async function createSchema(){
    const create = await zscan_database.query(`create schema if not exists unifica;`)
    return create
}

module.exports = createSchema