const loaders = require('./loaders');

function startServer() {
  const { graphQlServerOptions, graphQlServer } = loaders.init();

  graphQlServer.start(graphQlServerOptions, ({ port }) => console.info(`[🐰  GraphQL Server] listening on port ${port}`));
}

startServer();
