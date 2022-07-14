const zscan_database  = require('../db.js')
const unificar = require('../dbUnificar.js')
const migrationPtts = require('./tb_pttsControllers.js');
const migrationCnts = require('./tb_cntsControllers.js');
const migrationDocs = require('./tb_docsControllers.js');
const migrationptts_has_docs = require('./ptts_has_docsControllers.js');
const migrationTplt = require('./tb_tpltController.js');
const migrationExam = require('./tb_examControllers.js');
const migrationDvcs = require('./tb_dvcsControllers.js');
const migrationEmps = require('./tb_empsControllers.js');
const migrationRprt = require('./tb_rprtControllers.js');
const migrationImgs = require('./tb_imgsControllers.js');
const formataData = require('../handleData/formatDate.js')

//função administradora de migração
async function migraDados(){
    //select para pesquisa de pacientes
    const pacientesUnificar = await selectPttsUnificar();

    //funções para pesquisa e inserção de dados da tabela de Dispositivos.
    /*  const tb_dcvs = await selectTb_mdvcUnificar()
    await migrationDvcs(tb_dcvs) */

    //funções para pesquisa e inserção de dados da tabela de colaboradores.
    /* const tb_emps = await selectEmpsEndCntsUnificar()
    await migrationEmps(tb_emps) */

    //funções e loop para inserção das tabelas de templates e exames
    const tb_exam_tb_ptlt =  await selectTb_exam_tb_ptltUnificar();
/*     for(var i = 0; i < tb_exam_tb_ptlt.length; i++){
        await migrationTplt(tb_exam_tb_ptlt, i)
        const idtplt = await selectIdTpltZscanDatabase();
        const tb_exam = await selecetTb_examUnificar();
        
        await migrationExam(idtplt, tb_exam_tb_ptlt, i , tb_exam);
    } */
    
    // loop para inserção das tabelas de pacientes, contatos, documentos, relacional pacientes e documentos, laudos e imagens.
    for(var i = 0; i < pacientesUnificar.length; i++){
        console.log('entrei ', i)
        //migração de Contatos.
        await migrationCnts(pacientesUnificar, i);
        // Obter ultimo ID inserido na base de dados do ZscanEvo
        const cnts_id = await selectIdCntsZscanDatabase();
        //Migrando tabela de pacientes.
        await migrationPtts(pacientesUnificar, i, cnts_id);
        //Obtendo ultimo registro na base de dados do ZscanEvo
        const idpaciente = await selectIdPttsZscanDatabase();
        //Buscando dados dentro da base de dados Unificar
        const tb_docs = await selectPtts_has_docsUnificar(pacientesUnificar, i);
        //Migrando tabela de documentos.
        await migrationDocs(tb_docs);
        //Obtendo ultimo registro de documento na base ZscanEvo
        const idDocs = await selectIdDocsZscanDatabase();
        //relacionando pacientes com documentos.
        await migrationptts_has_docs(idpaciente, idDocs);

        //Migração de laudos
        const tb_rprt =  await selectRprtEndPttsUnificar(pacientesUnificar, i)
        await migrationRprt(tb_rprt, idpaciente)

        //Migração de imagens
        const tb_imgs = await selectImgsEndPttsUnificar(pacientesUnificar, i)
        await migrationImgs(tb_imgs,idpaciente)

    }  
}
//chamada do método executante.
migraDados()  





//funções de pesquisas
async function selectPttsUnificar(){
    const [pacientesUnificar] = await unificar.query(`select * from  tb_ptts as a inner join tb_cnts as b on a.ptts_code = b.cnts_code where a.ptts_dhcr like "2022-07-02%";`)
    return pacientesUnificar
}

async function selectIdCntsZscanDatabase(){
    const [cnts_id] = await zscan_database.query('SELECT cnts_code FROM tb_cnts ORDER BY cnts_code desc limit 1;');
    return cnts_id
}

async function selectIdPttsZscanDatabase(){
    const [idpaciente] = await zscan_database.query(`SELECT ptts_code FROM tb_ptts ORDER BY ptts_code desc limit 1;`);
    return idpaciente
}

async function selectPtts_has_docsUnificar(pacientesUnificar, i){
    const [tb_docs] = await unificar.query(`select * from ptts_has_docs as a inner join tb_docs as b on a.docs_code = b.docs_code where a.ptts_code = ${pacientesUnificar[i].ptts_code}`);
    return tb_docs
}

async function selectIdDocsZscanDatabase(){
    const [idDocs] = await zscan_database.query(`select docs_code from tb_docs ORDER BY docs_code desc limit 1;`); 
    return idDocs
}

async function selectTb_exam_tb_ptltUnificar(){
    const [tb_exam_tb_ptlt] = await unificar.query(`select * from tb_tplt as a inner join tb_exam as b on b.exam_tplt = a.tplt_code;`);
    return tb_exam_tb_ptlt
}

async function selectIdTpltZscanDatabase(){
    const [idtplt] = await zscan_database.query(`select tplt_code from tb_tplt ORDER BY tplt_code desc limit 1;`);
    return idtplt
}

async function selecetTb_examUnificar(){
    const [tb_exam] = await unificar.query(`select * from tb_exam;`);
    return tb_exam
}

async function selectIdExamZscanDatabase(){
    const [idExam] = await zscan_database.query(`select exam_code from tb_exam ORDER BY exam_code desc limit 1;`);
    return idExam
}

async function selectTb_mdvcUnificar(){
    const [tb_dcvs] = await unificar.query(`select * from tb_dvcs;`)
    return tb_dcvs
}

async function selectEmpsEndCntsUnificar(){
    const [tb_emps] = await unificar.query(`select * from  tb_emps as a inner join tb_cnts as b on a.emps_code = b.cnts_code;`)
    return tb_emps
}

async function selectRprtEndPttsUnificar(idpaciente, i){
    const [tb_rprt] = await unificar.query(`select * from tb_rprt as a inner join tb_ptts as b on a.rprt_ptts = b.ptts_code inner join tb_exam as c on c.exam_code = a.rprt_exam where a.rprt_ptts = ${idpaciente[i].ptts_code};`)
    return tb_rprt
}

async function selectImgsEndPttsUnificar(idpaciente, i){
    const [tb_imgs] = await unificar.query(`select * from tb_imgs as a inner join tb_ptts as b on a.imgs_ptts = b.ptts_code inner join tb_exam as c on a.imgs_exam = c.exam_code where b.ptts_code = ${idpaciente[i].ptts_code};`);
    return tb_imgs
}
