# nuxt-express-mongodb-app

Nuxt + Express + MongoDB + Docker app boilerplate

## How To Use

```bash
# clone this repository into you project directory
$ mkdir app
$ cd app
$ git clone https://github.com/AndBoh/nuxt-express-mongodb-app.git .

# remove .git directory and init your own repo if you want
$ rm .git
$ git init

# install dependencies
$ npm run install:all

# configure your environment
$ nano .env.example

# start to dev
$ npm run dev:start
```

## Project composition

**api** - Backend api directory. Works with express. Main file is *server.js*

**db** - Technical directory for database configuration

**docker** - Contains docker-compose configuration files

**frontend** - Regular Nuxt.js application with a little configuration

## NPM commands

```js
install:api // Install api dependencies
install:frontend // Install frontend dependencies
install:common // Install common dependencies
install:all // Install all dependencies

db:dev // Build MongoDB configuration file from .env.example
db:prod // Build MongoDB configuration file from .env

dev:start // Run api, db and frontend containers in development mode
dev:stop // Stop containers running in development mode

prod:build // Build api, db and frontend containers in production mode
prod:start // Run api, db and frontend containers in production mode
prod:stop // Stop containers running in production mode
```

### NOTE:

The database user is created from a .env file on first launch. If you change the database variables in .env the connection will fail. In this case, you need to delete database volume to reinit database.

```bash
# something like this
# be careful not to remove too much
$ docker volume rm docker_database
```