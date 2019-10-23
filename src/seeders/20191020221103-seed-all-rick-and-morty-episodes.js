const https = require('https');
const { get } = require('lodash/fp');

module.exports = {
  up: async (queryInterface) => new Promise((_resolve, reject) => {
    // node made an https request on public API to get all rick and morty episodes
    https.get('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes', (resStream) => {
      let rawData = '';

      resStream.on('data', (chunk) => { rawData += chunk; });

      resStream.on('end', () => {
        const rickAndMortyData = JSON.parse(rawData);
        const episodes = get('_embedded.episodes', rickAndMortyData);

        // format seasons objects for DB
        // the filter is here to delete duplicates
        const formatedSeasons = episodes.map((episode) => ({
          id: episode.season,
          number: episode.season,
          diffusionDate: new Date(episode.airdate).getFullYear(),
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        })).filter(
          (season, index, episodesSeasons) => episodesSeasons.map(
            (oneEpisodeSeasonObject) => oneEpisodeSeasonObject.number,
          ).indexOf(season.number) === index,
        );

        // format episiode objects for db
        const formatedEpisode = episodes.map((episode) => ({
          name: episode.name,
          number: episode.number,
          duration: episode.airtime,
          image: get('image.medium', episode),
          summary: episode.summary,
          seasonId: episode.season,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        }));


        return Promise.all([
          queryInterface.bulkInsert('Seasons', formatedSeasons),
          queryInterface.bulkInsert('Episodes', formatedEpisode),
        ]);
      });
    }).on('error', (err) => reject(err));
  }),

  down: (queryInterface) => Promise.all([
    queryInterface.bulkDelete('Episodes', null, {}),
    queryInterface.bulkDelete('Seasons', null, {}),
  ]),
};
