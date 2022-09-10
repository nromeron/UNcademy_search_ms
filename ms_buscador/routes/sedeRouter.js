const sedeController = require("../controllers/sedeController.js")

// router
const router = require('express').Router()


// sede routers
router.post('/addSede', sedeController.addSede)
router.get('/allSedes', sedeController.getAllSedes)
router.get('/sede/:id', sedeController.getOneSedeByID)
router.delete('/borrarSede/:id', sedeController.deleteSede)


module.exports = router
