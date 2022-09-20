const {Router} = require('express')
const RoutesIkapMigration =  require('../Controllers/IkapController.js')

const router = Router();

router.get('/pacientes', RoutesIkapMigration.RoutesIkapMigration.pesquisaPacientes)

module.exports = router