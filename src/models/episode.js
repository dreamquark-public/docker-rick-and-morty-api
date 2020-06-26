
module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define('Episode', {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    duration: DataTypes.STRING,
    image: DataTypes.STRING,
    summary: DataTypes.STRING(254),
    seasonId: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });
  Episode.associate = function associateEpisodeModel(models) {
    // associations can be defined here
    Episode.belongsTo(models.Season, { foreignKey: 'seasonId', targetKey: 'id', as: 'season' });
  };
  return Episode;
};
