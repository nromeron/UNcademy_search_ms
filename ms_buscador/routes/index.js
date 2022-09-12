const sedeController = require("../controllers/sedeController.js")
const facultadController = require("../controllers/facultadController.js")
const materiaController = require("../controllers/materiaController.js")
const planEstudioController = require("../controllers/planEstudioController.js")
const grupoController = require("../controllers/grupoController.js")

module.exports = (app) =>{

    // router
    var router = require('express').Router();

    // sede routers
    router.get('/sedes', sedeController.findAllSedes)
    router.get('/sedeId', sedeController.findSedeById)

    //facultad
    router.get('/facultades', facultadController.findAllFacultades)
    router.get('/facultadId/:id', facultadController.findFacultadById)

    //plan de estudios
    router.get('/planEstudios', planEstudioController.findAllPlanEstudio)
    router.get('/planEstudio/:id', planEstudioController.findPlanEstudioById)

    //materia
    router.get('/materias', materiaController.findAllMaterias)
    router.get('/nombre/:nombre', materiaController.findMateriaByName)
    router.get('/codigo/:codigoMateria', materiaController.findMateriaBycode)
    router.get('/tipologia/:tipologia', materiaController.findMateriaByType)
    router.get('/id/:id', materiaController.findMateriaById)
    router.get('/keyword/:keyword', materiaController.findMateriaByKeyword)
    router.get('/planEstudioId/:planEstudioId', materiaController.findMateriaByPlanEstudio)

    //grupo
    router.get('/groupByProfesor/:profesor', grupoController.findGroupByProfesor)
    router.get('/groupBynumer/:numero', grupoController.findGroupBynumer)

    app.use("/search", router); 
}



