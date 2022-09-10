module.exports = (sequelize, DataTypes) => {
    const SubGrupo = sequelize.define("subGrupo", {
        identificadorsubGrupo: {
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
    })
    return SubGrupo
}