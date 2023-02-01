<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rafaelftourinho/TFC?color=6E40C9&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/rafaelftourinho/TFC?color=6E40C9&style=flat-square">
  <a href="https://github.com/rafaelftourinho/talker_manager/commits/main">
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
