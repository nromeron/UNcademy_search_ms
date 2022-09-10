const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../config/dbConfig.js');

let sequelize = new Sequelize(
        dbConfig.DB,
        dbConfig.USER,
        dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})



const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sede = require('./sede.js')(sequelize, DataTypes)
db.facultad = require('./facultad.js')(sequelize, DataTypes)
db.nivelEstudio = require('./nivelEstudio')(sequelize, DataTypes)
db.planEstudio = require('./planEstudio')(sequelize, DataTypes)
db.grupo = require('./grupo.js')(sequelize, DataTypes)
db.materia = require('./materia.js')(sequelize, DataTypes)
db.subGrupo = require('./subGrupo.js')(sequelize, DataTypes)


//relaciones

db.sede.hasMany(db.facultad, {as: "facultad"});

db.facultad.hasMany(db.planEstudio, {as: "planEstudios"})
db.facultad.belongsTo(db.sede, {
    foreignKey: "sedeId",
    as: "sede"
});

db.nivelEstudio.hasMany(db.planEstudio, {as: "planEstudios"})

db.planEstudio.hasMany(db.materia, {as: "materia"})
db.planEstudio.belongsTo(db.nivelEstudio,{
    foreignKey: "nivelEstudioId",
    as: "nivelEstudio"
});
db.planEstudio.belongsTo(db.facultad, {
    foreignKey: "facultadId",
    as: "facultad"
});

db.materia.hasMany(db.grupo, {as: "grupo"})
db.materia.belongsTo(db.planEstudio, {
    foreignKey: "planEstudioId",
    as: "planEstudio"
});

db.grupo.hasMany(db.subGrupo, {as: "subGrupo"})
db.grupo.belongsTo(db.materia, {
    foreignKey: "materiaId",
    as: "materia"
});

db.subGrupo.belongsTo(db.grupo, {
    foreignKey: "grupoId",
    as: "grupo"
});



db.sequelize.sync({ force: true })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db