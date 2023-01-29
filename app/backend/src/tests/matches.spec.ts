import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match';
import matches from '././utils/matchesMock';
import { sign } from 'jsonwebtoken';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota "/matches"', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });
  describe('Testa a rota "get"', () => {
    it('Testa se é possível buscar as partidas de maneira correta', async () => {
      const res = await chai.request(app).get('/matches');
      expect(res.status).to.equal(200);
      // expect(res.body).to.deep.equal(matches);
    });
  
    it('Testa se ao adicionar a query "inProgress" retorna os dados esperados', async () => {
      const res = matches.filter((item) => item.inProgress === true);
      sinon.stub(Match, 'findAll').resolves(res as unknown as Match[]);
      const { status, body } = await chai.request(app).get('/matches?inProgress=true')
      expect(status).to.equal(200);
      expect(body).to.deep.equal(res);
    });

      // it('Testa se retorna partidas finalizadas', async () => {
  //   const res = matches.filter((item) => !item.inProgress);
  //   sinon.stub(Match, 'findAll').resolves(res as unknown as Match[]);
  //   const { status, body } = await chai.request(app).get('/matches?inProgress=false')
  //   expect(status).to.equal(200);
  //   expect(body).to.deep.equal(res);
  // });
  });

  describe('Testa a rota "post"', () => {
    sign({ id: 1 }, 'jwt_secret');

    it('Testa se é possível criar uma partida', async () => {
      const res = await chai.request(app).post('/matches').send(matches[0]);
      expect(res.status).to.equal(401);
      expect(res.body).to.deep.equal(matches[0]);
    });
  });
})
