
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Seasons', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    number: {
      type: Sequelize.INTEGER,
    },
    diffusionDate: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Seasons'),
};
