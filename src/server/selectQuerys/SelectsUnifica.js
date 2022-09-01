const unificar = require('../dbUnificar.js')

class SelectsUnificar {
    static async  selectPttsUnificar(){
            const [pacientesUnificar] = await unificar.query(`select * from  tb_ptts as a inner join tb_cnts as b on a.ptts_code = b.cnts_code where a.ptts_dhcr >= "2022-07-01";`)
            return pacientesUnificar
    }

    static async  selectPtts_has_docsUnificar(pacientesUnificar){
        const [tb_docs] = await unificar.query(`select * from ptts_has_docs as a inner join tb_docs as b on a.docs_code = b.docs_code where a.ptts_code = ${pacientesUnificar.ptts_code}`);
        return tb_docs
    }

    static async selectTb_exam_tb_ptltUnificar(){
        const [tb_exam_tb_ptlt] = await unificar.query(`select * from tb_tplt as a inner join tb_exam as b on b.exam_tplt = a.tplt_code;`);
        return tb_exam_tb_ptlt
    }

    static async selecetTb_examUnificar(){
        const [tb_exam] = await unificar.query(`select * from tb_exam;`);
        return tb_exam
    }

    static async selectTb_mdvcUnificar(){
        const [tb_dcvs] = await unificar.query(`select * from tb_dvcs;`)
        return tb_dcvs
    }

    static async selectEmpsEndCntsUnificar(){
        const [tb_emps] = await unificar.query(`select * from  tb_emps as a inner join tb_cnts as b on a.emps_code = b.cnts_code;`)
        return tb_emps
    }
    
    static async selectRprtEndPttsUnificar(idPaciente){
        const [tb_rprt] = await unificar.query(`select * from tb_rprt as a inner join tb_ptts as b on a.rprt_ptts = b.ptts_code inner join tb_exam as c on c.exam_code = a.rprt_exam where a.rprt_ptts = ${idPaciente};`)
        return tb_rprt
    }
    
    static async selectImgsEndPttsUnificar(idpaciente){
        const [tb_imgs] = await unificar.query(`select * from tb_imgs as a inner join tb_ptts as b on a.imgs_ptts = b.ptts_code inner join tb_exam as c on a.imgs_exam = c.exam_code where b.ptts_code = ${idpaciente.ptts_code};`);
        return tb_imgs
    }
}

module.exports = SelectsUnificar