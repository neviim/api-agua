# Controle de consumo de agua

Api para cadastrar o consumo em M3 do relogio de agua, com algumas informações especificas.

## Ambiente nodesjs

  ```bash
  mkdir nodesProjetos
  asdf list nodejs
  asdf local nodejs 12.18.2
  node -v

  yarn add mongoose
  yarn add @nestjs/mongoose
  yarn add @types/mongoose --dev
  ```

## Ambiente nestjs

  ```bash
  npm i -g @nestjs/cli
  nest new apiagua

  cd api-jads

  yarn run start
  yarn run start:dev
  ```

## Contruindo uma API, consumo de agua

  ```bash
  nest g controller tasks
  nest g provider tasks/shared/task.service
  nest g module tasks
  nest g class tasks/shared/task
  ```

## MongoDb

  Usando database: consumoagua

## Installation

```bash
yarn install
```

## Running the app

```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

## Test

```bash
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn run test:cov
```


## Utilizando PM2

```bash
# pm2
pm2 start ~/producao/api-agua/dist/src/main.js --watch
```


## Stay in touch

- Author  - [Neviim Jads](https://)
- Twitter - [@neviim](https://twitter.com/neviim)
- Website - [](https://)

## License

  Nest is [MIT licensed](LICENSE).
