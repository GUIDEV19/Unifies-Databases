const unificar = require('../config/dbUnificar.js')

async function selectImgsEndPttsUnificar(idpaciente){
    const [tb_imgs] = await unificar.query({
        query: `select * from tb_imgs as a inner join tb_ptts as b on a.imgs_ptts = b.ptts_code inner join tb_exam as c on a.imgs_exam = c.exam_code where b.ptts_code = ?;`,
        values: [
            idpaciente
        ]
    });
    return tb_imgs
}

module.exports = {
    selectImgsEndPttsUnificar
}