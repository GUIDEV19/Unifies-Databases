const migrationsIkap = require('../entidades/entidadesIkap/index.js')
const QuerysIkap = require('../selectQuerys/querysIkap/index.js')
const querysZscanEvo = require('../selectQuerys/querysZscanEvo/index.js')
const entidadesZscanEvo = require('../entidades/entidadesZscanEvo/index.js')


async function migrationIkap(){
    /* const result = await QuerysIkap.Pacientes.selectPacientes(); */
    const modelo = await QuerysIkap.Modelos.selectModelo();
    const exame = await QuerysIkap.Exames.selectExame(); 

    console.log(modelo)
    for(var i = 0; i < modelo.length; i++){
        await migrationsIkap.modelos(modelo[i], i)
    }

    for(var i = 0; i < modelo.length; i++){
        const idModelo = await querysZscanEvo.querysTbtplt
    }

/*     for(var i = 0; i < result.length; i++){
        const idCits = await querysZscanEvo.querysTbcity.selectCytsId(result[i].cidade)
        await migrationsIkap.contatos(result[i], idCits[0].cits_code)

        const idcnts = await querysZscanEvo.querysTbcnts.selectIdCntsZscanDatabase()
        await migrationsIkap.pacientes(result[i], idcnts[0].cnts_code)

        await migrationsIkap.documentos(result[i])
        const idDocs = await querysZscanEvo.querysTbdocs.selectIdDocsZscanDatabase()

        const idPtts = await querysZscanEvo.querysTbPtts.selectIdPttsZscanDatabase()
        await entidadesZscanEvo.migrationptts_has_docs(idPtts, idDocs)
    }  */
}

migrationIkap()