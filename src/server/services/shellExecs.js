const unificar = require('../dbUnificar.js')
const fs = require('fs')

async function restoreDump(path){
    const dump = fs.readFileSync(`${path}`, 'utf8')
    const t = await unificar.transaction();
    await unificar.query({
        query: dump,
        validate: true
    }, {transaction: t});
    await t.commit();
}

module.exports = restoreDump
