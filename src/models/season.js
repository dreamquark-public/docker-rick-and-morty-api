module.exports = (sequelize, DataTypes) => {
  const Season = sequelize.define('Season', {
    number: DataTypes.INTEGER,
    diffusionDate: DataTypes.DATE,
  }, {});
  Season.associate = function associateSeasonModel() {
    // associations can be defined here
  };
  return Season;
};
