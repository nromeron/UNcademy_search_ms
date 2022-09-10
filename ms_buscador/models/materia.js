module.exports = (sequelize, DataTypes) => {
    const Materia = sequelize.define("materia", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
              args: true,
              msg: "El Nombre de la Materia ya se encuentra en uso."
            }
            },
        codigoMateria: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
              args: true,
              msg: "El codigo de la Materia ya se encuentra en uso."
            }
            },
        creditos: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        cupos: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        tipologia: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        descripcion: {
            type: DataTypes.STRING,
            },
        prerequisitos: {
            type: DataTypes.STRING,
            allowNull: false,
            },
    })
    return Materia
}