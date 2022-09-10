const db = require('../models')
const Sede = db.sede

// crear una Sede

const addSede = async (req, res) => {

    let info = {
        nombre: req.body.nombre,
    }

    const sede = await Sede.create(info)
    res.status(200).send(sede)
    console.log(sede)

}

// 2. traer todas las sedes

const getAllSedes = async (req, res) => {

    let sede = await Sede.findAll({})
    res.status(200).send(sede)

}

// 3. traer solo una sede

const getOneSedeByID = async (req, res) => {

    let id = req.params.id
    let sede = await Sede.findOne({ where: { id: id }})
    res.status(200).send(sede)

}

// 4. borrar sede

const deleteSede = async (req, res) => {

    let id = req.params.id
    
    await Sede.destroy({ where: { id: id }} )

    res.status(200).send('la sede fue borrada')

}

module.exports = {
    addSede,
    getAllSedes,
    getOneSedeByID,
    deleteSede
}