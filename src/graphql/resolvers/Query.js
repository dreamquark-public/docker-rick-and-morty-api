async function episodes(_root, _args, context) {
  const { episodeDal } = context;

  const allEpisodes = await episodeDal.getEpisodes();

  return allEpisodes;
}

module.exports = {
  episodes,
};
