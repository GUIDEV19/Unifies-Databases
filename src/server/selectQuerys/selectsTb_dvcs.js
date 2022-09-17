const unificar = require('../config/dbUnificar.js')

async function selectTb_mdvcUnificar(){
    const [tb_dcvs] = await unificar.query(`select * from tb_dvcs;`)
    return tb_dcvs
}

module.exports = {
    selectTb_mdvcUnificar
}