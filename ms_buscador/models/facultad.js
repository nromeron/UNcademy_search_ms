module.exports = (sequelize, DataTypes) => {
  const Facultad = sequelize.define("facultad", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "El Nombre de la facultad ya se encuentra en uso."
      }
    }
  });
  return Facultad
}
