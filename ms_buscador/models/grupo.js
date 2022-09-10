const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Grupo extends Model{
        static associate(models) {
            Grupo.hasMany(models.subGrupo, {
                foreignKey: {
                  allowNull: false,
                }
              });
            Grupo.belongsTo(models.Materia)
        }
    }
    Grupo.init({
        numeroGrupo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: {
                args: true,
                msg: "El numero del grupo ya se encuentra en uso."
              }
            },
        cuposDisponibles: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        docenteTitular: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        semestre: {
            type: DataTypes.STRING,
            },
    }, {
        sequelize,
        modelName: 'Grupo',
      })

    return Grupo
}