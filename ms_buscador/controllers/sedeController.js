const db = require('../models')
const Sede = db.Sede



exports.findAllSedes = async(req, res) =>{
    const sedes = await Sede.findAll()
    res.send(sedes)
};