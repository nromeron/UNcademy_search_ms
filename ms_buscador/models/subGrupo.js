const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class subGrupo extends Model{
        static associate(models) {
            subGrupo.belongsTo(models.Grupo)
        }
    }
    subGrupo.init({
        identificadorSubGrupo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "El identificador del subGrupo ya se encuentra en uso."
              }
            },
        docenteEspecifico: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        salon: {
            type: DataTypes.STRING,
            },
        hora: {
            type: DataTypes.STRING,
            },
        dias: {
            type: DataTypes.STRING,
            },
    }, {
        sequelize,
        modelName: 'subGrupo',
      })

    return subGrupo
}