module.exports = (sequelize, DataTypes) => {
  const NivelEstudio = sequelize.define("nivelEstudio", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "El Nombre del plande estudios ya se encuentra en uso."
      }
    }
   });
  return NivelEstudio
}