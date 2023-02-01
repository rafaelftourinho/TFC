<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rafaelftourinho/TFC?color=6E40C9&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/rafaelftourinho/TFC?color=6E40C9&style=flat-square">
  <a href="https://github.com/rafaelftourinho/TFC/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rafaelftourinho/TFC?color=6E40C9&style=flat-square">
  </a>
</p>

# Boas vindas ao repositório do projeto Trybe Futebol Clube, mais conhecido como TFC

<div align="center">
  <img height="150px" align="right" src="https://theme.zdassets.com/theme_assets/9633455/9814df697eaf49815d7df109110815ff887b3457.png" />
  <div align="left" style="display: inline_block">
    <h2>Módulo: DESENVOLVIMENTO BACK-END</h2>
    <p>
      Repositório possuí projeto desenvolvido no período que estive na <b>Trybe</b>, abordando os conceitos de <b>API Rest</b> com CRUD completo em <b>TypeScript</b>, com utilização da ORM <b>Sequelize</b>, além de construir o projeto de acordo com o paradigma de orientação a objetos (<b>POO</b>) e <b>SOLID</b>. <b>Docker</b> para rodar o frontend, backend e database, separados e utilizando a arquitetura <b>MSC</b>. </br>
      Para testar a abordagem fora usados testes via <b>Mocha</b>, <b>Chai</b>, <b>Sinon</b>, com abordagem variando entre <b>TDD</b> e <b>BDD</b>;
  </div>
  <br>
</div>

---

## Habilidades

- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares;
- Utilizar ORM Sequelize para criação de queries;
- Utilizar o Paradigma de Orientação a Objetos (POO);
- Utilizar o princípio SOLID;
- Utilizar o TDD para confeção de testes e funções;
- Utilizar o BDD para testar camada Service;
- Utilizar o Docker para rodar separadamente os ambientes.

---

## O que foi desenvolvido

Criação de uma API Rest utilizando POO e princípios SOLID com construção de CRUD utilizando Sequelize para queries e docker para rodas os ambientes de forma separada.
O projeto é fullstack e representa uma simulação de uma tabela de um campeonato de futebol, com uma validação via login para saber se o usuário é admin ou não, o que libera novas features onde podemos alterar dados da partida, inserir novas partidas ou finalizar partidas em andamento. Na parte de frontend podemos filtrar os resultados, modificar e finalizar partidas, desde que seja admin, além de poder verificar a classificação geral, classificação de time mandante e de time visitante de forma separada.

---

## Instruções para instalar e rodar os testes de cada requisito

```bash
# Clone o repositório
  git clone git@github.com:rafaelftourinho/TFC.git
# Entre na pasta do repositório que você acabou de clonar:
  cd TFC
# Entre na parte de backend do projeto
  cd ./app/backend
# Instale as dependências e inicialize o projeto
  npm install
# Entre no Vs Code para verificar os arquivos usando o atalho no terminal:
  code .
#Para iniciar o projeto, execute o comando:
  docker compose up -d
# Para rodar os tests use o atalho no terminal:
  npm run test
# Para rodar os testes criados:
  cd ./app/backend/ && npm run test:coverage
```

## Detalhes
<details>
<summary><strong> Estrutura do projeto</strong></summary><br />

O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**

- Será um container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.
- Tem o papel de fornecer dados para o serviço de _backend_.
- Durante a execução dos testes sempre vai ser acessado pelo `sequelize` e via porta `3002` do `localhost`;
- Você também pode conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais configuradas no docker-compose no serviço `db`.

2️⃣ **Back-end:**

- Será o ambiente que você realizará a maior parte das implementações exigidas.
- Deve rodar na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
- Sua aplicação deve ser inicializada a partir do arquivo `app/backend/src/server.ts`;
- Garanta que o `express` é executado e a aplicação ouve a porta que vem das variáveis de ambiente;
- Todas as dependências extras (tal como `joi`, `boom`, `express-async-errors`...) devem ser listadas em `app/backend/packages.npm`.

3️⃣ **Front-end:**

- O front já está concluído, não é necessário realizar modificações no mesmo. A única exceção será seu Dockerfile que precisará ser configurado.
- Todos os testes a partir do requisito de login usam o `puppeteer` para simular uma pessoa acessando o site `http://localhost:3000/`;
- O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints que você deve construir nos requisitos.
- Recomendamos que sempre que implementar um requisito no back-end acesse a página no front-end que consome a implementação para validar se está funcionando como esperado.

4️⃣ **Docker:**

- O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up` ou `npm run compose:up:dev`;
- Você **deve** configurar as `Dockerfiles` corretamente nas raízes do `front-end` e `back-end`, para conseguir inicializar a aplicação;

</details>

<details>
  <summary><strong> Rotas</strong></summary><br />

1️⃣ **Rotas de usuários:**

- POST /login
  - responsável por registrar o login e retornar um token de usuário.
- GET /login/validate
  - responsável validar o login e retornar a 'role' do usuário.

2️⃣ **Rotas de times:**

- GET /teams
  - responsável por retornar times cadastrados no DB.
- GET /teams/:id
  - responsável por retornar times cadastrados no DB através do ID.

3️⃣ **Rotas de Partidas:**

- GET /matches
  - responsável por retornar todas as partidas.
- POST /matches/
  - responsável por cadastrar uma partida no DB.
    -PATCH /matches/:id
  - responsável por atualizar goas de uma partida específica
- PATCH /matches/:id/finish
  - responsável por atualizar o status de uma partida em andamento para partida finalizada ('inProgress: false') no DB.

4️⃣ **Rotas de Líderes:**

- GET /leaderboard
  - responsável por retornar os líderes do campeonato (dentro ou fora de casa).
- GET /leaderboard/home
  - responsável por retornar os líderes do campeonato jogando em casa.
- GET /leaderboard/away
  - responsável por retornar os líderes do campeonato jogando fora de casa

</details>
