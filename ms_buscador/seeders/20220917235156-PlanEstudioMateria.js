'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PlanEstudioMateria', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:1,
      PlanEstudioId: 1,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:2,
      PlanEstudioId: 1,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:3,
      PlanEstudioId: 1,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:4,
      PlanEstudioId: 1,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:5,
      PlanEstudioId: 1,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:6,
      PlanEstudioId: 2,
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      MateriumId:7,
      PlanEstudioId: 2,
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PlanEstudioMateria', null, {});
  }
};
