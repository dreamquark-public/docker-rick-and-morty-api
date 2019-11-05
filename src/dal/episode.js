const { Episode, Season } = require('../models');

function getEpisodes(skip = 0, limit = 8) {
  return Episode.findAndCountAll({
    offset: skip,
    limit,
    include: [{
      model: Season,
      as: 'season',
    }],
  });
}

module.exports = {
  getEpisodes,
};
