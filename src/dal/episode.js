const { Episode, Season } = require('../models');

function getEpisodes() {
  return Episode.findAll({
    include: [{
      model: Season,
      as: 'season',
    }],
  }).then((episodes) => episodes);
}

module.exports = {
  getEpisodes,
};
