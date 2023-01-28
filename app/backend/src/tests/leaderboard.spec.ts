import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota "leaderboard"', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Retorna a tabela completa', async () => {
    const res = await chai.request(app).get('/leaderboard');
    expect(res.status).to.equal(200);
  });

  it('Retorna a tabela completa com paginação', async () => {
    const res = await chai.request(app).get('/leaderboard?page=1&limit=10');
    expect(res.status).to.equal(200);
  });

  it('Retorna a tabela completa com paginação e ordenação', async () => {
    const res = await chai.request(app).get('/leaderboard?page=1&limit=10&sort=totalPoints');
    expect(res.status).to.equal(200);
  });

  it('Retorna a tabela completa com paginação e ordenação invertida', async () => {
    const res = await chai.request(app).get('/leaderboard?page=1&limit=10&sort=totalPoints&order=desc');
    expect(res.status).to.equal(200);
  });

  it('Retorna a tabela de jogos dentro de casa', async () => {
    const res = await chai.request(app).get('/leaderboard/home');
    expect(res.status).to.equal(200);
  });

  it('Retorna a tabela de jogos fora de casa', async () => {
    const res = await chai.request(app).get('/leaderboard/away');
    expect(res.status).to.equal(200);
  });
})
