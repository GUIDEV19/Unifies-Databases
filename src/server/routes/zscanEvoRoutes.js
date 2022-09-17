const {Router} = require('express')
const ZscanEvoController =  require('../Controllers/ZscanEvoController.js')

const router = Router();

router.post('/iniciar', ZscanEvoController.iniciaMigration)

module.exports = router