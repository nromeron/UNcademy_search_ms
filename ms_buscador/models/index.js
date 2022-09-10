const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../config/dbConfig.js');

const db = {}

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


db.sede = require('./sede.js')(sequelize, DataTypes)
db.facultad = require('./facultad.js')(sequelize, DataTypes)
db.nivelEstudio = require('./nivelEstudio')(sequelize, DataTypes)
db.planEstudio = require('./planEstudio')(sequelize, DataTypes)
db.grupo = require('./grupo.js')(sequelize, DataTypes)
db.materia = require('./materia.js')(sequelize, DataTypes)
db.subGrupo = require('./subGrupo.js')(sequelize, DataTypes)




db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({ force: true })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db