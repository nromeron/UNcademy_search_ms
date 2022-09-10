const db = require('../models')
const NivelEstudio = db.nivelEstudio

// crear 

const addNivelEstudio = async (req, res) => {

    let info = {
        nombre: req.body.nombre,
    }

    const nivelEstudio = await NivelEstudio.create(info)
    res.status(200).send(nivelEstudio)
    console.log(nivelEstudio)

}

// 2. traer todas las NivelEstudios

const getAllNivelEstudios = async (req, res) => {

    let nivelEstudio = await NivelEstudio.findAll({})
    res.status(200).send(nivelEstudio)

}

// 3. traer solo una NivelEstudio

const getOneNivelEstudioByID = async (req, res) => {

    let id = req.params.id
    let nivelEstudio = await NivelEstudio.findOne({ where: { id: id }})
    res.status(200).send(nivelEstudio)

}

// 4. borrar NivelEstudio

const deleteNivelEstudio = async (req, res) => {

    let id = req.params.id
    
    await NivelEstudio.destroy({ where: { id: id }} )

    res.status(200).send('la NivelEstudio fue borrada')

}

module.exports = {
    addNivelEstudio,
    getAllNivelEstudios,
    getOneNivelEstudioByID,
    deleteNivelEstudio
}