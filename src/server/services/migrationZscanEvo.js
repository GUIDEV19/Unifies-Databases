const querys = require('../selectQuerys/index.js');
const migrations = require('../entidades/index.js');

/* const migrationPtts = require('./tb_ptts.js');
const migrationCnts = require('./tb_cnts.js');
const migrationDocs = require('./tb_docs.js');
const migrationptts_has_docs = require('./ptts_has_docs.js');
const migrationTplt = require('./tb_tplt.js');
const migrationExam = require('./tb_exam.js');
const migrationDvcs = require('./tb_dvcs.js');
const migrationEmps = require('./tb_emps.js');
const migrationRprt = require('./tb_rprt.js');
const migrationImgs = require('./tb_imgs.js'); */

//função administradora de migração
async function migraDados(){
    //select para pesquisa de pacientes
    const pacientesUnificar = await querys.querysTbPtts.selectPttsUnificar()

    //funções para pesquisa e inserção de dados da tabela de Dispositivos.
    const tb_dcvs = await querys.querysTbdvcs.selectTb_mdvcUnificar()
    await migrations.migrationDvcs(tb_dcvs)

    //funções para pesquisa e inserção de dados da tabela de colaboradores.
    const tb_emps = await querys.querysTbemps.selectEmpsEndCntsUnificar()
    await migrations.migrationEmps(tb_emps) 

    //funções e loop para inserção das tabelas de templates e exames
    const tb_exam_tb_ptlt =  await querys.querysTbtplt.selectTb_exam_tb_ptltUnificar();
    for(var i = 0; i < tb_exam_tb_ptlt.length; i++){

        await migrations.migrationTplt(tb_exam_tb_ptlt, i)
        const idtplt = await querys.querysTbtplt.selectIdTpltZscanDatabase();
        const tb_exam = await querys.querysTbexam.selecetTb_examUnificar();
        
        await migrations.migrationExam(idtplt, tb_exam_tb_ptlt, i , tb_exam);
    } 
    
    // loop para inserção das tabelas de pacientes, contatos, documentos, relacional pacientes e documentos, laudos e imagens.
    for(var i = 0; i < pacientesUnificar.length; i++){
        //migração de Contatos.
        await migrations.migrationCnts(pacientesUnificar, i);
        // Obter ultimo ID inserido na base de dados do ZscanEvo
        const cnts_id = await querys.querysTbcnts.selectIdCntsZscanDatabase();
        //Migrando tabela de pacientes.
        await migrations.migrationPtts(pacientesUnificar, i, cnts_id);
        //Obtendo ultimo registro na base de dados do ZscanEvo
        const idpaciente = await querys.querysTbPtts.selectIdPttsZscanDatabase();
        //Buscando dados dentro da base de dados Unificar
        console.log(pacientesUnificar[i].ptts_code)
        const tb_docs = await querys.querysTbdocs.selectPtts_has_docsUnificar(pacientesUnificar[i].ptts_code)
        //Migrando tabela de documentos.
        await migrations.migrationDocs(tb_docs);
        //Obtendo ultimo registro de documento na base ZscanEvo
        const idDocs = await querys.querysTbdocs.selectIdDocsZscanDatabase();
        //relacionando pacientes com documentos.
        await migrations.migrationptts_has_docs(idpaciente, idDocs);

        //Migração de laudos
        const tb_rprt =  await querys.querysTbrprt.selectRprtEndPttsUnificar(pacientesUnificar[i].ptts_code)
        await migrations.migrationRprt(tb_rprt, idpaciente)

        //Migração de imagens
        const tb_imgs = await querys.querysTbimgs.selectImgsEndPttsUnificar(pacientesUnificar[i].ptts_code)
        await migrations.migrationImgs(tb_imgs,idpaciente)

    }
    console.log('#####################') 
    console.log('Processo Finalizado')
    console.log('#####################')
}


module.exports = migraDados  