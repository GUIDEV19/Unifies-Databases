const unificar = require('../dbUnificar.js')

async function selectRprtEndPttsUnificar(idPaciente){
    const [tb_rprt] = await unificar.query({
        query: `select * from tb_rprt as a inner join tb_ptts as b on a.rprt_ptts = b.ptts_code inner join tb_exam as c on c.exam_code = a.rprt_exam where a.rprt_ptts = ?;`,
        values: [
            idPaciente
        ]
    })
    return tb_rprt
}

module.exports = {
    selectRprtEndPttsUnificar
}
    