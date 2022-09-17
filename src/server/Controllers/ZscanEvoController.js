const path = require('path')
const iniciar = require('../services/migrationZscanEvo.js')

class RoutesZscanEvoMigration {
    static async iniciaMigration(req, res) {
        const caminho = path.resolve(req.body.caminho)
        const date = req.body.data
        iniciar(caminho, date) 
        var teste =  res.status(200).send({
        message: 'Iniciado processo'
        });
        return teste
    }
}

module.exports = RoutesZscanEvoMigration;
