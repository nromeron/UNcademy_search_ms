'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Subgrupos', [{
      id:1,
      identificadorSubGrupo: "5-1",
      docenteEspecifico: "Camilo Torres albarado",
      salon: "402 del cyt",
      hora: "9-11",
      dias: "Martes y Jueves",
      createdAt: new Date(),
      updatedAt: new Date(),
      GrupoId: 1,
    },
    {id:2,
      identificadorSubGrupo: "5-2",
      docenteEspecifico: "No informado",
      salon: "407 del cyt",
      hora: "11-1",
      dias: "Lunes y Miercoles",
      createdAt: new Date(),
      updatedAt: new Date(),
      GrupoId: 1,
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Subgrupos', null, {});
  }
};
