[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Installation

```bash
# npm 8 or higher
# node 16 or higher

$ npm install
```

## HUSKY for linting staged files
```bash

$ npm run husky
$ npm run lint:fix

```

## Database

```bash
$ docker-compose --version (must be 2.7.0)
$ docker-compose up db -d
$ docker-compose exec db bash
$ psql -U postgres -d projectz

```
[psql commands](https://www.postgresqltutorial.com/postgresql-administration/psql-commands/)
[docker cleanup](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes/)

## Migrations

```bash
# run migrations
$ npm run migration:run

# generate migrations
$ npm run migration:generate

# revert migrations
$ npm run migration:revert

if you get error on migrations try deleting dist folder, remove db container and volume

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
