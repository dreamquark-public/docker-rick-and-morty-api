# Rick and Morty Search Engine API

![JSStyle](https://badgen.net/badge/codestyle/airbnb?icon=airbnb&label=codestyle)

an API with all rick and morty episodes and search engine features (with multiple engine service such as ElasticSearch and others).
this repo is used to tests mutiples search engines solutions.

project stucture is based on [Bulletproof node.js project architecture article](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf), please read it to have more informations about the code structure.

## Available Scripts

In the project directory, you can run:

### `yarn serve:dev`

Run the api on development mode<br>
Open [http://localhost:8080](http://localhost:8080) to view the welcome message from the API.
the chrome debugger can be connected to `localhost:9042`

### `yarn lint`

Launch eslint to check code style. The code style is [airbnb javascript style](https://github.com/airbnb/javascript)

### `yarn sequelize`

Launch a db comand with [sequelize cli](https://github.com/sequelize/cli#documentation)
