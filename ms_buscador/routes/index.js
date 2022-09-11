const sedeController = require("../controllers/sedeController.js")
const facultadController = require("../controllers/facultadController.js")
const materiaController = require("../controllers/materiaController.js")

module.exports = (app) =>{

    // router
    var router = require('express').Router();

    // sede routers
    router.get('/sedes', sedeController.findAllSedes)

    //facultad
    router.get('/facultades', facultadController.findAllFacultades )

    //materia
    router.get('/materias', materiaController.findAllMaterias)
    router.get('/nombre/:nombre', materiaController.findMateriaByName)
    router.get('/codigo/:codigoMateria', materiaController.findMateriaBycode)
    router.get('/tipologia/:tipologia', materiaController.findMateriaByType)
    router.get('/id/:id', materiaController.findMateriaById)
    router.get('/keyword/:keyword', materiaController.findMateriaByKeyword)

    app.use("/search", router); 
}



