# Controle de consumo de agua

  Api para cadastrar o consumo de M3 de agua do relogio de agua
  com algumas informaçoes adicionais. 


# Ambiente nodesjs

  $ mkdir nodesProjetos
  $ asdf list nodejs
  $ asdf local nodejs 12.18.2
  $ node -v

  $ yarn add mongoose
  $ yarn add @nestjs/mongoose 
  $ yarn add @types/mongoose --dev

  # Ambiente nestjs 

    $ npm i -g @nestjs/cli
    $ nest new apiagua

      $ cd api-jads

      $ yarn run start
      $ yarn run start:dev


  # Contruindo um To-Do

    $ nest g controller tasks
    $ nest g provider tasks/shared/task.service
    $ nest g module tasks
    $ nest g class tasks/shared/task


  # MongoDb

    Usando database: consumoagua


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Stay in touch

- Author  - [Neviim Jads](https://)
- Twitter - [@neviim](https://twitter.com/neviim)
- Website - []()

## License

  Nest is [MIT licensed](LICENSE).
