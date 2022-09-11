'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Grupos', [{
      id:1,
      numeroGrupo: 5,
      cuposDisponibles: 15,
      docenteTitular: "Camilo Torres albarado",
      semestre: "2022-II",
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId: 1,
    },
    {id:2,
      numeroGrupo: 1,
      cuposDisponibles: 10,
      docenteTitular: "Julian Alvarez",
      semestre: "2022-II",
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId: 1,
    },
    {id:3,
      numeroGrupo: 4,
      cuposDisponibles: 12,
      docenteTitular: "Sergio Arboleda",
      semestre: "2022-II",
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId: 1,
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Grupos', null, {});
  }
};
