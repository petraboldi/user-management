# Bookmark Manager Demo

### Quickstart
```sh
$ git clone git@github.com:digital-futures-academy/bookmark-manager-demo.git && cd bookmark-manager-demo
$ npm install
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
$ npx nodemon app.js
```

### Databases
```sh
# create and migrate development database
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate

# create and migrate test database
$ NODE_ENV=test npx sequelize-cli db:create
$ NODE_ENV=test npx sequelize-cli db:migrate
```

### Run tests
```sh
# run your tests using your test db
$ NODE_ENV=test npx nodemon app.js
$ NODE_ENV=test npx cypress open
```

##### NB
1. For each test, use `beforeEach()`  to run the [cypress task](cypress/plugins/index.js) to clear the data in the tables.
2.For each new table added, add it to the [database cleaning](./db-reset.js)

### Screen Recordings
- [Part 1](https://youtu.be/SH2izPTQqpk)
- [Part 2](https://youtu.be/cPRtAADCYi4)
