const unificar = require('../../config/dbUnificar.js')

async function selectEmpsEndCntsUnificar(){
    const [tb_emps] = await unificar.query(`select * from  tb_emps as a inner join tb_cnts as b on a.emps_code = b.cnts_code;`)
    return tb_emps
}

module.exports = {
    selectEmpsEndCntsUnificar
}