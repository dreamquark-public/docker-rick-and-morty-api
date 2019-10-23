default: help;

initdb: ## initialize the sqlite database in db/rickandmortydb.sqlite3, create the tables and seed it with rick and morty episodes.
	mkdir -p db/
	# this command will execute sqlite3 cli, create the db file and finally execute the .quit command from the pipe
	# to quit the command interface.
	echo ".quit" | sqlite3 ./db/rickandmortydb.sqlite3;
	yarn sequelize db:migrate
	yarn sequelize db:seed:all

help:	## display this help.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' ${MAKEFILE_LIST} | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
