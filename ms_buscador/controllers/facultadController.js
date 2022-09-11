const db = require('../models')
const Facultad = db.Facultad


exports.findAllFacultades = async(req, res) =>{
    const facultad = await Facultad.findAll()
    res.send(facultad)
};

