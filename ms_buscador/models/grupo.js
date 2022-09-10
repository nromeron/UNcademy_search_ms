module.exports = (sequelize, DataTypes) => {
    const Grupo = sequelize.define("grupo", {
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
    });
    return Grupo
}