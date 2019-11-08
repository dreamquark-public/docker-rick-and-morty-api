async function episodesLibrary(_root, args, context) {
  const { episodeDal } = context;
  const { skip, limit } = args;

  const allEpisodes = await episodeDal.getEpisodes(skip, limit);

  return {
    totalCount: allEpisodes.count,
    collection: allEpisodes.rows,
  };
}

module.exports = {
  episodesLibrary,
};
