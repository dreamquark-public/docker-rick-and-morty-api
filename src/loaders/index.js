const graphQlLoader = require('./graphql');

function init() {
  const graphQLServer = graphQlLoader.load();

  return graphQLServer;
}

module.exports = {
  init,
};
