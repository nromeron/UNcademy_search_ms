const sedeController = require("../controllers/sedeController.js")
const nivelEstudioController = require("../controllers/nivelEstudioController.js")

// router
const router = require('express').Router()


// sede routers
router.post('/addSede', sedeController.addSede)
router.get('/allSedes', sedeController.getAllSedes)
router.get('/sede/:id', sedeController.getOneSedeByID)
router.delete('/borrarSede/:id', sedeController.deleteSede)

// Nivel de estudio routers

router.post('/addNivelEstudio', nivelEstudioController.addNivelEstudio)
router.get('/allNivelEstudios', nivelEstudioController.getAllNivelEstudios)
router.get('/NivelEstudio/:id', nivelEstudioController.getOneNivelEstudioByID)
router.delete('/borrarNivelEstudio/:id', nivelEstudioController.deleteNivelEstudio)


module.exports = router
