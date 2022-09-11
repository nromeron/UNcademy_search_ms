'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Planestudios', [{
      id:1,
      nombre: "Ingeniería de Sistemas y Computación",
      creditosDisOpt: 23,
      creditosDisObl: 31,
      creditosFunOpt: 17,
      creditosFunObl: 31,
      creditosLibElc: 33,
      creditosTraGrado: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      FacultadId: 1,
      NivelEstudioId: 1,
    },
    {id:2,
      nombre: "Ingeniería Mecanica",
      creditosDisOpt: 12,
      creditosDisObl: 45,
      creditosFunOpt: 11,
      creditosFunObl: 27,
      creditosLibElc: 37,
      creditosTraGrado: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
      FacultadId: 1,
      NivelEstudioId: 1,
    },
    {id:3,
      nombre: "Ingeniería Electrica",
      creditosDisOpt: 13,
      creditosDisObl: 21,
      creditosFunOpt: 47,
      creditosFunObl: 21,
      creditosLibElc: 13,
      creditosTraGrado: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
      FacultadId: 1,
      NivelEstudioId: 1,
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Planestudios', null, {});
  }
};
