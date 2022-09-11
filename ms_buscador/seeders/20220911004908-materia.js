'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Materia', [{
      id:1,
      nombre: "Programación de computadores",
      codigoMateria: 235168,
      creditos: 3,
      cupos: 37,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de programación de computadores",
      prerequisitos: "Ningún prerequisito",
      createdAt: new Date(),
      updatedAt: new Date(),
      PlanEstudioId: 1,
    },
    {id:2,
      nombre: "Programación orientada a objetos",
      codigoMateria: 654123,
      creditos: 3,
      cupos: 30,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de Programación orientada a objetos",
      prerequisitos: "Programación de computadores",
      createdAt: new Date(),
      updatedAt: new Date(),
      PlanEstudioId: 1,
    },
    {id:3,
      nombre: "Computación paralela y distribuida",
      codigoMateria: 987456,
      creditos: 4,
      cupos: 25,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Computación paralela y distribuida",
      prerequisitos: "sistemas operativos, Algoritmos ",
      createdAt: new Date(),
      updatedAt: new Date(),
      PlanEstudioId: 1,
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Materia', null, {});
  }
};
