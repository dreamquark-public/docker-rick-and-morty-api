const { GraphQLServer } = require('graphql-yoga');
const { port } = require('../config');
const resolvers = require('../graphql/resolvers');
const dal = require('../dal');

function load() {
  const graphQlServerOptions = {
    port,
    endpoint: '/graphql',
    playground: '/ide',
  };
  const graphQlServer = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers,
    context: {
      ...dal,
    },
  });

  return {
    graphQlServerOptions,
    graphQlServer,
  };
}

module.exports = {
  load,
};
