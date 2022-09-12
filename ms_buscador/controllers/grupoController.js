const db = require('../models')
const Grupo = db.Grupo
const Op = db.Sequelize.Op;


exports.findGroupByProfesor= async(req, res) =>{
    const profesor = req.params.profesor;
    const grupo = await Grupo.findAll({where:{docenteTitular: profesor},
        include: [
            {
                model: db.Materia,
                required: true,
            }
        ]})
    res.status(200).send(grupo)
};

exports.findGroupBynumer= async(req, res) =>{
    const numero = req.params.numero;
    const grupo = await Grupo.findAll({where:{numeroGrupo: numero},
        include: [
            {
                model: db.Materia,
                required: true,
            }
        ]})
    res.status(200).send(grupo)
};

/*
exports.findMateriaByType= async(req, res) =>{
    const tipologia = req.params.tipologia;
    const materia = await Materia.findAll({where:{tipologia: tipologia},
        include: [
        {
            model: db.PlanEstudio,
            required: true,
            include: [
                {
                    model: db.NivelEstudio,
                    required: true
                },
                {
                    model: db.Facultad,
                    required: true,
                    include: {
                        model: db.Sede,
                        required: true
                    }
                },
            ]
        }
    ]})
    res.status(200).send(materia)
};

exports.findMateriaById= async(req, res) =>{
    const id = req.params.id;
    const materia = await Materia.findAll({where:{id: id},
        include: [
            {
                model: db.PlanEstudio,
                required: true,
                include: [
                    {
                        model: db.NivelEstudio,
                        required: true
                    },
                    {
                        model: db.Facultad,
                        required: true,
                        include: {
                            model: db.Sede,
                            required: true
                        }
                    },
                ]
            }
        ]})
    res.status(200).send(materia)
};

exports.findMateriaByKeyword= async(req, res) =>{
    const keyword = req.params.keyword;
    const materia = await Materia.findAll({where:{
        [Op.or]:[
            {
                nombre: {
                    [Op.like]: `%${keyword}%`
                }
            },
            {
                codigoMateria: {
                    [Op.like]: `%${keyword}%`
                }
            },
            {
                tipologia: {
                    [Op.like]: `%${keyword}%`
                }
            },
            {
                descripcion: {
                    [Op.like]: `%${keyword}%`
                }
            },  
        ]
    },
    include: [
        {
            model: db.PlanEstudio,
            required: true,
            include: [
                {
                    model: db.NivelEstudio,
                    required: true
                },
                {
                    model: db.Facultad,
                    required: true,
                    include: {
                        model: db.Sede,
                        required: true
                    }
                },
            ]
        }
    ]})
    res.status(200).send(materia)
};


exports.findMateriaByPlanEstudio= async(req, res) =>{
    const planEstudio = req.params.planEstudioId;
    const materia = await Materia.findAll({where:{PlanEstudioId: planEstudio},
    include: [
        {
            model: db.PlanEstudio,
            required: true,
            include: [
                {
                    model: db.NivelEstudio,
                    required: true
                },
                {
                    model: db.Facultad,
                    required: true,
                    include: {
                        model: db.Sede,
                        required: true
                    }
                },
            ]
        }
    ]})
    res.status(200).send(materia)
}; */