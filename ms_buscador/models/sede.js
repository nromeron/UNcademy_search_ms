module.exports = (sequelize, DataTypes) => {
   const Sede = sequelize.define("sede", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "El Nombre de la sede ya se encuentra en uso."
      }
    }
   });   
  return Sede
}
