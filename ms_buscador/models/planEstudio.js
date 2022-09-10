module.exports = (sequelize, DataTypes) => {
    const PlanEstudio = sequelize.define("planEstudios", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
              args: true,
              msg: "El Nombre de la PlanEstudio ya se encuentra en uso."
            }
          },
        creditosDisOpt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditosDisObl: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditosFunOpt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditosFunObl: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditosLibElc: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creditosTraGrado: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
    return PlanEstudio
}