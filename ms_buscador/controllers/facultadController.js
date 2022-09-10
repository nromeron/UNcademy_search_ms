const db = require('../models')
const Facultad = db.facultad

// crear una Facultad

const addFacultad = async (req, res) => {

    let info = {
        nombre: req.body.nombre,
    }

    const facultad = await Facultad.create(info)
    res.status(200).send(facultad)
    console.log(facultad)

}

// 2. traer todas las sedes

const getAllFacultads = async (req, res) => {

    let facultad = await Facultad.findAll({})
    res.status(200).send(facultad)

}

// 3. traer solo una sede

const getOneFacultadByID = async (req, res) => {

    let id = req.params.id
    let facultad = await Facultad.findOne({ where: { id: id }})
    res.status(200).send(facultad)

}

// 4. borrar sede

const deleteFacultad = async (req, res) => {

    let id = req.params.id
    
    await Facultad.destroy({ where: { id: id }} )

    res.status(200).send('la facultad fue borrada')

}

module.exports = {
    addFacultad,
    getAllFacultads,
    getOneFacultadByID,
    deleteFacultad
}